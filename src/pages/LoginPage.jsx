import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../featuers/auth/loginSlice";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isAuth = useSelector((store) => store.login.isAutnenticated);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  function handelSubmit(e) {
    e.preventDefault();
    if (email === "" || password === "") return;

    dispatch(login(email, password));

    navigate("/");
  }

  function handelLogout() {
    dispatch(logout());
    navigate("/");
  }

  return (
    <section className="layout py-6">
      {!isAuth ? (
        <form
          className="flex flex-col gap-6 w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-md text-lg text-[#3E445A]"
          onSubmit={(e) => handelSubmit(e)}
        >
          <h2 className="text-2xl font-bold text-center">Login</h2>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-[#71778E]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-[#F3F9F7] rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#35AFA0] transition-all duration-300 shadow-sm"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-[#71778E]"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-[#F3F9F7] rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#35AFA0] transition-all duration-300 shadow-sm"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="bg-[#35AFA0] text-white font-semibold py-2 rounded-md hover:bg-[#35AFA0] transition-colors duration-300 cursor-pointer"
          >
            Login
          </button>
        </form>
      ) : (
        <div className="flex flex-col gap-6 w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-md text-lg text-[#3E445A]">
          <h2 className="text-2xl font-bold text-center">
            Welcome you are login
          </h2>

          <button
            onClick={handelLogout}
            className="bg-[#35AFA0] text-white font-semibold py-2 rounded-md hover:bg-[#35AFA0] transition-colors duration-300 cursor-pointer"
          >
            Logout
          </button>
        </div>
      )}
    </section>
  );
}

export default LoginPage;
