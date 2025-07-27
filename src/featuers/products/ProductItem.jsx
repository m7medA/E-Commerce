import { priceAfterDiscount } from "../../utils/price";
import { useDispatch } from "react-redux";
import { deleteFromWishlist } from "../wishlist/wishlistSlice";
import Button from "../../components/Button";
import { NavLink } from "react-router-dom";

function ProductItem({ product }) {
  const dispatch = useDispatch();

  function handelDelete() {
    dispatch(deleteFromWishlist(product.id));
  }

  return (
    <NavLink to="/productpagedetials">
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
            alt={`${product.title}`}
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
          <Button type="delete" buttonFunc={handelDelete}>
            Delete
          </Button>
          <Button>Add to cart</Button>
        </div>
      </li>
    </NavLink>
  );
}

export default ProductItem;
