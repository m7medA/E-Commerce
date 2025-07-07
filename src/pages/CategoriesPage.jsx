import { useLoaderData } from "react-router-dom";
import { fetchCategories } from "../utils/fetches";

function CategoriesPage() {
  const categories = useLoaderData();

  return (
    <div className="w-[90%] mx-auto p-6">
      <h1>categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.name}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
}

export async function loader() {
  const categories = await fetchCategories();
  return categories;
}

export default CategoriesPage;
