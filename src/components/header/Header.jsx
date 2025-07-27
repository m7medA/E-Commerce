import { NavLink } from "react-router-dom";
import HeaderMain from "./HeaderMain";
import CategoriesBar from "./CategoriesBar";

function Header() {
  return (
    <header className="w-full pb-2">
      <p className="bg-main text-white py-1 text-center text-xs">
        Due to current circumstances, there may be slight delays in order
        processing
      </p>

      <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:px-6 py-2 text-color text-sm font-semibold border-b-2 border-[#EDEEF5]">
        <div className="flex items-center justify-center w-full md:w-auto md:border-none border-b-2 border-[#EDEEF5]">
          <NavLink
            to="/cartpage"
            className={({ isActive }) =>
              `px-2 py-1 transition-all duration-300 ease-in-out transform pl-2 hover:-translate-y-1  ${
                isActive
                  ? "border-b-2 border-main font-bold rounded-sm -translate-y-1"
                  : ""
              }`
            }
          >
            Cart
          </NavLink>
          <div className="border-8 border-[#EDEEF5] md:border-none rounded-full"></div>
          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              `px-2 py-1 transition-all duration-300 ease-in-out transform pr-2 hover:-translate-y-1 ${
                isActive
                  ? "border-b-2 border-main font-bold rounded-sm -translate-y-1"
                  : ""
              }`
            }
          >
            Wishlist
          </NavLink>
          <div className="border-8 border-[#EDEEF5] md:border-none rounded-full"></div>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-2 py-1 transition-all duration-300 ease-in-out transform pr-2 hover:-translate-y-1 md:hidden ${
                isActive
                  ? "border-b-2 border-main font-bold rounded-sm -translate-y-1"
                  : ""
              }`
            }
          >
            About Us
          </NavLink>
        </div>

        <div className="flex items-center gap-2 text-xs text-center md:text-left">
          <img src="/images/Vector.svg" alt="secure" className="w-4 h-4" />
          <p>100% Secure delivery without contacting the courier</p>
        </div>

        <p className="text-xs whitespace-nowrap">
          Need help? Call Us:{" "}
          <span className="text-main font-semibold">+20 1280650152</span>
        </p>
      </div>

      <HeaderMain />

      <CategoriesBar />
    </header>
  );
}

export default Header;
