import { NavLink } from "react-router-dom";
import HomePanners from "../components/HomePanners";
import DisPlayProducts from "../featuers/products/DisplayProducts";

function HomePage() {
  return (
    <section>
      <HomePanners />

      <div className="layout py-6">
        <div className="pb-6">
          <h2 className="uppercase text-[#202435] font-semibold text-3xl py-2">
            best sellers
          </h2>
          <p className="text-[#9B9BB4]">
            Do not miss the current offers until the end of March.
          </p>
        </div>

        <DisPlayProducts pagination="top" skipValue={40} />
      </div>

      <div className="layout my-6 flex items-center justify-between bg-[#F8EFEA] rounded-md relative sm:relative ">
        <div className="px-3 sm:px-6 flex flex-col gap-2 sm:gap-3 text-left sm:text-center md:text-left absolute sm:relative">
          <p className="font-light text-[#9B9BB4] text-sm sm:text-lg">
            Always Taking Care
          </p>
          <p className="font-bold text-[#71778E] text-base sm:text-xl">
            In store or online your health & safety is our top priority.
          </p>
        </div>

        <img
          src="/images/midImage.png"
          alt="midImage.png"
          className="rounded-md w-48 sm:w-64 ml-[calc(100%-192px)] sm:ml-0"
        />
      </div>

      <div className="layout py-6">
        <div className="pb-6 flex items-center justify-between">
          <div>
            <h2 className="uppercase text-[#202435] font-semibold text-2xl sm:text-3xl py-1 sm:py-2 text-left">
              All products
            </h2>
            <p className="text-[#9B9BB4] text-sm sm:text-base text-left">
              All products with updated stocks.
            </p>
          </div>

          <NavLink
            to="/allproductspage"
            className="text-[#D9D9E9] text-sm sm:text-base border-1 border-[#D9D9E9] px-3 py-2 rounded-xl font-semibold hover:bg-[#D9D9E9] hover:text-white transition-all duration-300 flex items-center gap-1 sm:gap-2"
          >
            View more <span className="text-2xl hidden sm:block">→</span>
          </NavLink>
        </div>
        <DisPlayProducts limit={10} withSkip={0} />
      </div>
    </section>
  );
}

export default HomePage;
