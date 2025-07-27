import { useLoaderData, useNavigation, useParams } from "react-router-dom";
import { fetchCategory } from "../utils/fetches";
import ProductContianer from "../featuers/products/ProductContianer";
import Spinner from "../components/Spinner";

function CategoryPage() {
  const navigation = useNavigation();
  const section = useParams();
  const { products } = useLoaderData();

  return navigation.state === "loading" ? (
    <Spinner />
  ) : (
    <div className=" layout py-6">
      <h1 className="uppercase text-[#202435] text-center mb-6 font-semibold text-2xl sm:text-3xl py-1 sm:py-2">
        {section.category} section
      </h1>
      <ProductContianer products={products} />
    </div>
  );
}

export async function loader({ params }) {
  const categoryItrems = await fetchCategory(params.category);
  return categoryItrems;
}

export default CategoryPage;
