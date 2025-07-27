import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchByIds } from "../../utils/fetches";
import ProductContianer from "../products/ProductContianer";
import Spinner from "../../components/Spinner";

function CartPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState();

  const cartProducts = useSelector((store) => store.cart.cartProducts);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      if (cartProducts.length > 0) {
        const data = await fetchByIds(cartProducts);
        setProducts(data);
      } else {
        setProducts([]);
      }
      setIsLoading(false);
    };
    fetchProducts();
  }, [cartProducts]);

  return (
    <section className="layout py-6">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <h1 className="mb-12 text-4xl font-semibold tracking-widest text-[#35AFA0]">
            Your Cart
          </h1>
          {products && <ProductContianer products={products} />}{" "}
        </>
      )}
    </section>
  );
}

export default CartPage;
