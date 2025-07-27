import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import UserInfo from "./UserInfo";

function HeaderMain() {
  return (
    <div className="sm:px-6 w-[90%] mx-auto py-4 sm:py-4 flex  gap-4 flex-wrap md:flex-nowrap items-center justify-between">
      <NavLink to="/" className="shrink-0 w-[40%] sm:w-auto">
        <img src="/images/logo.svg" alt="Logo" className=" w-auto" />
      </NavLink>

      <SearchBar />

      <UserInfo />
    </div>
  );
}

export default HeaderMain;
