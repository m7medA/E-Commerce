import { useLoaderData, useParams } from "react-router-dom";
import { fetchBySearchQuery } from "../utils/fetches";
import ProductContianer from "../featuers/products/ProductContianer";

function SearchResults() {
  const { products } = useLoaderData();
  const { query } = useParams();

  return (
    <div className="w-[90%] mx-auto p-6">
      <h1 className="text-xl font-semibold tracking-widest text-[#3E445A] mb-6">
        Found {products.length} results for:{" "}
        <span className="text-main text-[#35AFA0]">"{query}"</span>
      </h1>

      <ProductContianer products={products} />
    </div>
  );
}

export async function loader({ params }) {
  const resultProducts = await fetchBySearchQuery(params.query);
  return resultProducts;
}

export default SearchResults;
