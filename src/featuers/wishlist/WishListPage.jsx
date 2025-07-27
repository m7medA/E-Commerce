import { useSelector } from "react-redux";
import { fetchByIds } from "../../utils/fetches";
import { useState } from "react";
import { useEffect } from "react";
import ProductContianer from "../products/ProductContianer";
import SpinnerFullPage from "../../components/SpinnerFullPage";
import Message from "../../components/Message";

function WishList() {
  const [isLoading, setIsLoading] = useState(true);
  const wishlistIds = useSelector((store) => store.wishlist.wishlistIds);
  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      if (wishlistIds.length > 0) {
        const data = await fetchByIds(wishlistIds);
        setProducts(data);
      } else {
        setProducts([]);
      }
      setIsLoading(false);
    };
    fetchProducts();
  }, [wishlistIds]);

  return isLoading ? (
    <SpinnerFullPage />
  ) : (
    <section className="layout py-6">
      <h1 className="mb-12 text-4xl font-semibold tracking-widest text-[#35AFA0]">
        Your wish List
      </h1>
      <Message />
      {products && <ProductContianer products={products} />}{" "}
    </section>
  );
}

export default WishList;
