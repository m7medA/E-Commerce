import CtegoryNavLink from "../CtegoryNavLink";

function CategoriesBar() {
  return (
    <div className="layout flex gap-4 items-center justify-center md:justify-between border-b-1 border-[#E3E4E6] pb-4">
      <CtegoryNavLink to="/categoriespage">All Categories</CtegoryNavLink>

      <ul className="hidden lg:flex flex-wrap gap-4 items-center justify-between">
        <CtegoryNavLink to="/" type="category">
          Home
        </CtegoryNavLink>
        <CtegoryNavLink to="/categoryPage/beauty" type="category">
          Beauty
        </CtegoryNavLink>
        <CtegoryNavLink to="/categoryPage/Furniture" type="category">
          Furniture
        </CtegoryNavLink>
        <CtegoryNavLink to="/categoryPage/Tablets" type="category">
          Tablets
        </CtegoryNavLink>
        <CtegoryNavLink to="/categoryPage/Laptops" type="category">
          Laptops
        </CtegoryNavLink>
        <CtegoryNavLink to="/about" type="category">
          About Us
        </CtegoryNavLink>
      </ul>
    </div>
  );
}

export default CategoriesBar;
