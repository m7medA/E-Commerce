import { NavLink } from "react-router-dom";
import HeaderMain from "./HeaderMain";
import CategoriesBar from "./CategoriesBar";

function Header() {
  return (
    <header className="container mx-auto">
      <p className="bg-[#35AFA0] text-white py-2 text-center text-xs">
        Due to current circumstances, there may be slight delays in order
        processing
      </p>

      <div className="w-[90%] mx-auto flex items-center justify-between px-6 py-3 text-[#3E445A] text-sm font-semibold border-b-2 border-[#EDEEF5]">
        <div className="flex items-center justify-between w-[auto] ">
          <NavLink
            to="/about"
            className={({ isActive }) => `
                px-2 py-1 transition-all duration-300 ease-in-out transform
              ${
                isActive
                  ? " border-b-3 border-[#35afa0] font-bold rounded-sm -translate-y-1 "
                  : ""
              }`}
          >
            About US
          </NavLink>
          <NavLink
            to="/wishlist"
            className={({ isActive }) => `
                px-2 py-1 transition-all duration-300 ease-in-out transform
              ${
                isActive
                  ? " border-b-3 border-[#35afa0] font-bold rounded-sm -translate-y-1 "
                  : ""
              }`}
          >
            Wishlist
          </NavLink>
        </div>

        <div className="flex">
          <span className="mr-2">
            <img src="/src/assets/images/Vector.svg" alt="" />
          </span>
          <p>100% Secure delivery without contacting the courier</p>
        </div>

        <p className="text-xs">
          Need help? Call Us: <span className="text-[#35AFA0]">+ 0020 500</span>
        </p>
      </div>

      <HeaderMain />

      <CategoriesBar />
    </header>
  );
}

export default Header;
