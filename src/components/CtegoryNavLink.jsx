import { NavLink, useNavigate } from "react-router-dom";

function CtegoryNavLink({ children, to, type = "categories" }) {
  const navigate = useNavigate();

  function handelNavigate(e) {
    if (window.location.pathname === to) {
      e.preventDefault();
      navigate(-1);
    }
  }

  const base =
    "px-4 py-3 rounded-full font-semibold transition-all duration-300";

  return (
    <>
      {type === "categories" ? (
        <NavLink
          to={`${to}`}
          className={({ isActive }) =>
            `sm:text-xl w-[80%] md:w-auto flex items-center justify-between md:block ${base} ${isActive ? " text-main bg-white border-2 border-main" : " text-white bg-main border-2 border-white"}`
          }
          onClick={handelNavigate}
        >
          {({ isActive }) => (
            <>
              <span className="pr-4">
                <i className="fa-solid fa-bars"></i>
              </span>
              {children}
              <span className="pl-4 font-light text-sm">
                <i
                  className={`transition-all duration-300 fa-solid fa-angle-${isActive ? "down" : "up"}`}
                ></i>
              </span>
            </>
          )}
        </NavLink>
      ) : (
        <NavLink
          to={`${to.trim()}`}
          className={({ isActive }) =>
            `hover:bg-[#F0FAFF] ${base} ${isActive ? " text-main bg-[#F0FAFF]" : " text-color"}`
          }
        >
          {({ isActive }) => (
            <>
              {children}
              {isActive && (
                <span className="pl-4 font-light text-sm transition-all duration-300">
                  <i
                    className={`transition-all duration-300 fa-solid fa-angle-${isActive ? "down" : "up"}`}
                  ></i>
                </span>
              )}
            </>
          )}
        </NavLink>
      )}
    </>
  );
}

export default CtegoryNavLink;
