import { priceAfterDiscount } from "../utils/price";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  addToWishlist,
  deleteFromWishlist,
} from "../featuers/wishlist/wishlistSlice";

function ProductItem({ product, loved }) {
  const [liked, setLiked] = useState(loved);

  const dispatch = useDispatch();

  function handelLiked() {
    const newLiked = !liked;
    setLiked(newLiked);
    newLiked
      ? dispatch(addToWishlist(product.id))
      : dispatch(deleteFromWishlist(product.id));
  }

  return (
    <li className="border border-[#EDEEF5] flex flex-col items-center rounded-sm group">
      <div className="m-4 w-3xs bg-white">
        <div className="absolute">
          {product.discountPercentage ? (
            <p className="px-2 py-1 bg-[#35AFA0] rounded-lg text-white text-lg">
              {product.discountPercentage}%
            </p>
          ) : null}
        </div>
        <img
          src={`${product.images[0]}`}
          alt="Product Image"
          className="w-full transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <h3 className="py-4 font-semibold text-xl text-[#202435]">
        {product.title}
      </h3>

      <p
        className={`${
          product.stock ? "text-[#00B853]" : "text-[#D51243]"
        } text-lg pb-3`}
      >
        {product.stock ? "in stock" : "out stock"}
      </p>

      {product.discountPercentage ? (
        <div className="flex items-center justify-between lg:w-[35%] w-[50%]">
          <p className="text-lg text-[#C2C2D3] line-through">
            {product.price}$
          </p>
          <p className="text-xl text-[#D51243]">
            {product.discountPercentage
              ? priceAfterDiscount(product.price, product.discountPercentage)
              : product.price}
            $
          </p>
        </div>
      ) : (
        <p className="text-xl">{product.price}$</p>
      )}

      <div className="pt-8 pb-6 flex items-center justify-between w-[80%]">
        <svg
          onClick={handelLiked}
          xmlns="http://www.w3.org/2000/svg"
          fill={loved ? "red" : "none"}
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          className="w-6 h-6 cursor-pointer transition-colors duration-200"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.8 7.5c0 3.1-4.3 6.4-9.8 11.3C6.5 13.9 2.2 10.6 2.2 7.5 2.2 5 4.3 3 6.7 3c1.5 0 2.9.8 3.7 2 0.8-1.2 2.2-2 3.7-2 2.4 0 4.5 2 4.5 4.5z"
          />
        </svg>
      </div>
    </li>
  );
}

export default ProductItem;
