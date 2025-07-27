import { useLoaderData } from "react-router-dom";
import { fetchCategories } from "../utils/fetches";
import CtegoryNavLink from "../components/CtegoryNavLink";

function CategoriesPage() {
  const categories = useLoaderData();

  return (
    <section className="layout py-6 text-sm sm:text-base">
      <ul className="flex items-center justify-items-start flex-wrap">
        {categories.map((category) => (
          <CtegoryNavLink
            key={category.slug}
            to={`/categoryPage/${category.slug.trim().toLowerCase()}`}
            type="category"
          >
            {category.name}
          </CtegoryNavLink>
        ))}
      </ul>
    </section>
  );
}

export async function loader() {
  const categories = await fetchCategories();
  return categories;
}

export default CategoriesPage;
