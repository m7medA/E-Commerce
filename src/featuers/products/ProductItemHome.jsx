import { useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart, DeleteFromCart } from "../cart/cartSlice";
import {
  addToWishlist,
  deleteFromWishlist,
} from "../../featuers/wishlist/wishlistSlice";
import StarRating from "../../components/StarRating";
import Button from "../../components/Button";
import { priceAfterDiscount } from "../../utils/price";
import { useNavigate } from "react-router-dom";

function ProductItem({ product, loved, cartProductsId }) {
  const [liked, setLiked] = useState(loved);
  const [incart, setInCart] = useState(cartProductsId);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handelLiked(e) {
    e.stopPropagation();
    const newLiked = !liked;
    setLiked(newLiked);
    newLiked
      ? dispatch(addToWishlist(product.id))
      : dispatch(deleteFromWishlist(product.id));
  }

  function handelInCart(e) {
    e.stopPropagation();
    const newInCart = !incart;
    setInCart(newInCart);
    newInCart
      ? dispatch(addToCart(product.id))
      : dispatch(DeleteFromCart(product.id));
  }

  return (
    <li
      className="border-2 border-[#EDEEF5] text-left flex flex-col gap-2 rounded-md w-[90%] md:w-auto h-[400px] cursor-pointer group"
      onClick={() => navigate(`/productpagedetials/${product.id}`)}
    >
      <div className="w-3xs p-4 mx-auto relative">
        <div className="absolute left-0 md:left-auto">
          {product.discountPercentage ? (
            <p className="px-2 py-1 bg-[#35AFA0] rounded-md text-white text-lg">
              {product.discountPercentage}%
            </p>
          ) : null}
        </div>
        <div className="flex items-center flex-col">
          <img
            src={`${product.images[0]}`}
            alt={`${product.title}`}
            className="w-38 sm:w-36 transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>

      <div className="px-4">
        <h3 className="min-h-[56px] font-semibold text-sm sm:text-base md:text-lg text-[#202435]">
          {product.title}
        </h3>

        <p
          className={`text-left py-1 ${
            product.stock ? "text-[#00B853]" : "text-[#D51243]"
          } text-sm sm:text-base md:text-lg pb-3`}
        >
          {product.stock ? "in stock" : "out stock"}
        </p>

        <StarRating defaultRating={product.rating} size={18} />

        {product.discountPercentage ? (
          <div className="flex items-center gap-2 justify-between w-[70%] sm:w-[50%] lg:w-[35%] py-2">
            <p className="text-sm sm:text-base text-[#C2C2D3] line-through">
              {product.price}$
            </p>
            <p className="text-base sm:text-lg md:text-xl text-[#D51243]">
              {priceAfterDiscount(product.price, product.discountPercentage)}$
            </p>
          </div>
        ) : (
          <p className="text-base sm:text-lg md:text-xl">{product.price}$</p>
        )}

        <div className="flex items-center justify-between">
          <svg
            onClick={(e) => handelLiked(e)}
            xmlns="http://www.w3.org/2000/svg"
            fill={loved ? "#D51243" : "none"}
            viewBox="0 0 24 24"
            stroke={loved ? "#D51243" : "currentColor"}
            strokeWidth={1.8}
            className="w-6 h-6 cursor-pointer transition-all duration-300 hover:scale-110 hover:stroke-red-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
              2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09 
              C13.09 3.81 14.76 3 16.5 3 
              19.58 3 22 5.42 22 8.5 
              c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>

          <Button buttonFunc={(e) => handelInCart(e)}>
            {incart ? (
              <i className="fa-solid fa-circle-minus"></i>
            ) : (
              <i className="fa-solid fa-cart-plus hover:rotate-12 hover:scale-110 hover:text-white transition-transform duration-300"></i>
            )}
          </Button>
        </div>
      </div>
    </li>
  );
}

export default ProductItem;
