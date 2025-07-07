import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import UserInfo from "./UserInfo";

function HeaderMain() {
  return (
    <div className="contianer mx-auto w-[90%] px-6 py-6 flex items-center justify-between">
      <NavLink to="/">
        <img src="/src/assets/images/logo.svg" alt="Logo" />
      </NavLink>

      <SearchBar />

      <UserInfo />
    </div>
  );
}

export default HeaderMain;
