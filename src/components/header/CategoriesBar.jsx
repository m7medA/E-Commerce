import { NavLink } from "react-router-dom";

function CategoriesBar() {
  return (
    <div className="w-[90%] mx-auto p-6">
      <NavLink to="categoriespage" className="">
        <span></span> All Categories
      </NavLink>
    </div>
  );
}

export default CategoriesBar;
