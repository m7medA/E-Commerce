function Footer() {
  return (
    <section className="py-6 bg-[#F7F8FD]">
      <div className="bg-[#35afa0] pt-6 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="text-white space-y-4">
            <p className="text-sm">
              <span className="underline text-[#c7f5e9]">$20 discount</span> for
              your first order
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold">
              Join our newsletter and get...
            </h2>
            <p className="text-sm text-[#dcfdf7]">
              Join our email subscription now to get updates on promotions and
              coupons.
            </p>

            <form className="bg-white rounded-md p-1 flex items-center gap-2 max-w-md shadow-md text-sm">
              <span className="text-gray-400 px-2">
                <i className="fa-regular fa-envelope"></i>
              </span>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-2 py-2 rounded-md outline-none text-gray-700"
              />
              <button
                type="submit"
                className="bg-[#35afa0] hover:bg-[#2b998b] text-white text-sm font-medium px-2 py-1 sm:px-4 sm:py-2 rounded-md border border-white transition cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src="/images/footerimg.png"
              alt="coupon"
              className="max-h-64 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="layout py-6 bg-[#F7F8FD] md:border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm text-[#202435] text-center">
          <div className="flex items-center justify-center gap-2 md:border-r border-r-0 border-b md:border-b-0 pb-2 md:pb-0 border-gray-300 last:border-none">
            <i className="fa-solid fa-box text-lg"></i>
            <span>Everyday fresh products</span>
          </div>

          <div className="flex items-center justify-center gap-2 md:border-r border-r-0 border-b md:border-b-0 pb-2 md:pb-0 border-gray-300 last:border-none">
            <i className="fa-solid fa-truck text-lg"></i>
            <span>Free delivery for order over $70</span>
          </div>

          <div className="flex items-center justify-center gap-2 md:border-r border-r-0 border-b md:border-b-0 pb-2 md:pb-0 border-gray-300 last:border-none">
            <i className="fa-solid fa-gift text-lg"></i>
            <span>Daily Mega Discounts</span>
          </div>

          <div className="flex items-center justify-center border-b md:border-b-0 pb-2 md:pb-0 border-gray-300 gap-2">
            <i className="fa-solid fa-dollar-sign text-lg"></i>
            <span>Best price on the market</span>
          </div>
        </div>
      </div>

      <div className="bg-[#F7F8FD] layout py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          <div>
            <h3 className="text-sm uppercase text-gray-900 mb-4 font-semibold text-center sm:text-left">
              Fruit & Vegetables
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="text-sm text-center sm:text-left cursor-pointer hover:scale-105 transition-all duration-300 hover:text-[#35AFA0]">
                Fresh Vegetables
              </li>
              <li className="text-sm text-center sm:text-left cursor-pointer hover:scale-105 transition-all duration-300 hover:text-[#35AFA0]">
                Herbs & Seasonings
              </li>
              <li className="text-sm text-center sm:text-left cursor-pointer hover:scale-105 transition-all duration-300 hover:text-[#35AFA0]">
                Fresh Fruits
              </li>
              <li className="text-sm text-center sm:text-left cursor-pointer hover:scale-105 transition-all duration-300 hover:text-[#35AFA0]">
                Cuts & Sprouts
              </li>
              <li className="text-sm text-center sm:text-left cursor-pointer hover:scale-105 transition-all duration-300 hover:text-[#35AFA0]">
                Exotic Fruits & Veggies
              </li>
              <li className="text-sm text-center sm:text-left cursor-pointer hover:scale-105 transition-all duration-300 hover:text-[#35AFA0]">
                Packaged Produce
              </li>
              <li className="text-sm text-center sm:text-left cursor-pointer hover:scale-105 transition-all duration-300 hover:text-[#35AFA0]">
                Party Trays
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase text-gray-900 mb-4 font-semibold text-center sm:text-left">
              Breakfast & Dairy
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="text-sm text-center sm:text-left cursor-pointer hover:scale-105 transition-all duration-300 hover:text-[#35AFA0]">
                Milk & Flavoured Milk
              </li>
              <li className="text-sm text-center sm:text-left cursor-pointer hover:scale-105 transition-all duration-300 hover:text-[#35AFA0]">
                Butter and Margarine
              </li>
              <li className="text-sm text-center sm:text-left cursor-pointer hover:scale-105 transition-all duration-300 hover:text-[#35AFA0]">
                Cheese
              </li>
              <li className="text-sm text-center sm:text-left cursor-pointer hover:scale-105 transition-all duration-300 hover:text-[#35AFA0]">
                Eggs Substitutes
              </li>
              <li className="text-sm text-center sm:text-left cursor-pointer hover:scale-105 transition-all duration-300 hover:text-[#35AFA0]">
                Honey
              </li>
              <li className="text-sm text-center sm:text-left cursor-pointer hover:scale-105 transition-all duration-300 hover:text-[#35AFA0]">
                Marmalades
              </li>
              <li className="text-sm text-center sm:text-left cursor-pointer hover:scale-105 transition-all duration-300 hover:text-[#35AFA0]">
                Sour Cream and Dips
              </li>
              <li className="text-sm text-center sm:text-left cursor-pointer hover:scale-105 transition-all duration-300 hover:text-[#35AFA0]">
                Yogurt
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase text-gray-900 mb-4 font-semibold text-center sm:text-left">
              Meat & Seafood
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="text-sm text-center sm:text-left cursor-pointer hover:scale-105 transition-all duration-300 hover:text-[#35AFA0]">
                Breakfast Sausage
              </li>
              <li className="text-sm text-center sm:text-left cursor-pointer hover:scale-105 transition-all duration-300 hover:text-[#35AFA0]">
                Dinner Sausage
              </li>
              <li className="text-sm text-center sm:text-left cursor-pointer hover:scale-105 transition-all duration-300 hover:text-[#35AFA0]">
                Beef
              </li>
              <li className="text-sm text-center sm:text-left cursor-pointer hover:scale-105 transition-all duration-300 hover:text-[#35AFA0]">
                Chicken
              </li>
              <li className="text-sm text-center sm:text-left cursor-pointer hover:scale-105 transition-all duration-300 hover:text-[#35AFA0]">
                Sliced Deli Meat
              </li>
              <li className="text-sm text-center sm:text-left cursor-pointer hover:scale-105 transition-all duration-300 hover:text-[#35AFA0]">
                Shrimp
              </li>
              <li className="text-sm text-center sm:text-left cursor-pointer hover:scale-105 transition-all duration-300 hover:text-[#35AFA0]">
                Wild Caught Fillets
              </li>
              <li className="text-sm text-center sm:text-left cursor-pointer hover:scale-105 transition-all duration-300 hover:text-[#35AFA0]">
                Crab and Shellfish
              </li>
              <li className="text-sm text-center sm:text-left cursor-pointer hover:scale-105 transition-all duration-300 hover:text-[#35AFA0]">
                Farm Raised Fillets
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase text-gray-900 mb-4 font-semibold text-center sm:text-left">
              Beverages
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="text-sm text-center sm:text-left cursor-pointer hover:scale-105 transition-all duration-300 hover:text-[#35AFA0]">
                Water
              </li>
              <li className="text-sm text-center sm:text-left cursor-pointer hover:scale-105 transition-all duration-300 hover:text-[#35AFA0]">
                Sparkling Water
              </li>
              <li className="text-sm text-center sm:text-left cursor-pointer hover:scale-105 transition-all duration-300 hover:text-[#35AFA0]">
                Soda & Pop
              </li>
              <li className="text-sm text-center sm:text-left cursor-pointer hover:scale-105 transition-all duration-300 hover:text-[#35AFA0]">
                Coffee
              </li>
              <li className="text-sm text-center sm:text-left cursor-pointer hover:scale-105 transition-all duration-300 hover:text-[#35AFA0]">
                Milk & Plant-Based Milk
              </li>
              <li className="text-sm text-center sm:text-left cursor-pointer hover:scale-105 transition-all duration-300 hover:text-[#35AFA0]">
                Tea & Kombucha
              </li>
              <li className="text-sm text-center sm:text-left cursor-pointer hover:scale-105 transition-all duration-300 hover:text-[#35AFA0]">
                Drink Boxes & Pouches
              </li>
              <li className="text-sm text-center sm:text-left cursor-pointer hover:scale-105 transition-all duration-300 hover:text-[#35AFA0]">
                Craft Beer
              </li>
              <li className="text-sm text-center sm:text-left cursor-pointer hover:scale-105 transition-all duration-300 hover:text-[#35AFA0]">
                Wine
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase text-gray-900 mb-4 font-semibold text-center sm:text-left">
              Breads & Bakery
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="text-sm text-center sm:text-left cursor-pointer hover:scale-105 transition-all duration-300 hover:text-[#35AFA0]">
                Milk & Flavoured Milk
              </li>
              <li className="text-sm text-center sm:text-left cursor-pointer hover:scale-105 transition-all duration-300 hover:text-[#35AFA0]">
                Butter and Margarine
              </li>
              <li className="text-sm text-center sm:text-left cursor-pointer hover:scale-105 transition-all duration-300 hover:text-[#35AFA0]">
                Cheese
              </li>
              <li className="text-sm text-center sm:text-left cursor-pointer hover:scale-105 transition-all duration-300 hover:text-[#35AFA0]">
                Eggs Substitutes
              </li>
              <li className="text-sm text-center sm:text-left cursor-pointer hover:scale-105 transition-all duration-300 hover:text-[#35AFA0]">
                Honey
              </li>
              <li className="text-sm text-center sm:text-left cursor-pointer hover:scale-105 transition-all duration-300 hover:text-[#35AFA0]">
                Marmalades
              </li>
              <li className="text-sm text-center sm:text-left cursor-pointer hover:scale-105 transition-all duration-300 hover:text-[#35AFA0]">
                Sour Cream and Dips
              </li>
              <li className="text-sm text-center sm:text-left cursor-pointer hover:scale-105 transition-all duration-300 hover:text-[#35AFA0]">
                Yogurt
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-300 py-6 text-sm">
        <div className="flex flex-col items-center md:items-center gap-2">
          <p className="font-medium text-center">
            Download App on Mobile :{" "}
            <span className="text-xs text-gray-400">
              15% discount on your first purchase
            </span>
          </p>
          <div className="flex gap-2">
            <img
              src="/images/googlePlayImg.png"
              alt="googlePlay"
              className="h-8"
            />
            <img
              src="/images/appleStoreImg.png"
              alt="appleStore"
              className="h-8"
            />
          </div>
        </div>
      </div>

      <div className="text-center py-4 text-xs text-gray-400">
        <p>Copyright 2025 © All rights reserved by M7MED AYMAN</p>
        <div className="flex flex-wrap justify-center gap-4 mt-2 text-gray-400">
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
          <p>Cookie</p>

          <img src="/images/barImg.png" alt="" className="h-4" />
        </div>
      </div>
    </section>
  );
}

export default Footer;
