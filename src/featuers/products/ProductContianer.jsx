import { useSelector } from "react-redux";
import ProductItem from "./ProductItemHome";

function ProductContianer({ products }) {
  const wishlistIds = useSelector((store) => store.wishlist.wishlistIds);
  const cartProductsId = useSelector((store) => store.cart.cartProducts);

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 place-items-center">
      {products.map((product) => (
        <ProductItem
          product={product}
          key={product.id}
          loved={wishlistIds.includes(product.id)}
          cartProductsId={cartProductsId.includes(product.id)}
        />
      ))}
    </ul>
  );
}

export default ProductContianer;
