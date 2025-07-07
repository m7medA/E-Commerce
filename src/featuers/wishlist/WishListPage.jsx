import { NavLink } from "react-router-dom";
import ProductItem from "../products/ProductItem";
import { useSelector } from "react-redux";
import { fetchById } from "../../utils/fetches";
import { useState } from "react";
import { useEffect } from "react";
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
        const data = await fetchById(wishlistIds);
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
    <section className="px-4 py-6">
      <NavLink to="/" className={"text-[#3E445A]"}>
        Home
      </NavLink>

      <h1 className="mb-12 text-4xl font-semibold tracking-widest text-[#35AFA0]">
        Your wish List
      </h1>

      <Message />

      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products &&
          products.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
      </ul>
    </section>
  );
}

export default WishList;
