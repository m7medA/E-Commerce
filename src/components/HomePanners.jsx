import { useState } from "react";

function HomePanners() {
  const [activeSlide, setSctiveSlide] = useState("1");

  return (
    <div className="flex items-center justify-evenly w-full py-6">
      <div className="relative">
        <div className="sm:aspect-[4/2.1] aspect-[4/2.3] w-full md:max-w-[850px] md:h-[490px] overflow-hidden bg-gray-100 rounded-md">
          <img
            src={`/images/imageHome_${activeSlide}.png`}
            alt=""
            className=" w-full h-full object-cover"
          />
        </div>

        <div className="absolute w-[90%] sm:w-[80%] md:w-[50%] top-6 sm:top-10 md:top-30 left-4 sm:left-8 md:left-12 flex flex-col justify-between text-[#202435]">
          <p className="pb-3 text-xs sm:text-lg">
            Exclusive Offer{" "}
            <span className="text-[#038E42] p-2 ml-2 rounded-full bg-gradient-to-r from-[#00B85333] to-transparent uppercase text-sm sm:text-xl">
              -20% Off
            </span>
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-wide md:leading-[50px] pb-2">
            Specialist in the grocery store
          </h1>

          <p className="pb-6 text-sm sm:text-base">
            Only this week. Don’t miss...
          </p>

          <p className="font-light text-sm sm:text-base">
            From{" "}
            <span className="text-[#D51243] text-xl sm:text-2xl md:text-3xl pl-2 font-bold">
              $7.99
            </span>
          </p>

          <div className="md:w-[6%] sm:w-[4%] w-[8%] flex items-center justify-between mt-10">
            <button
              className={`cursor-pointer border-4 rounded-full transition-all duration-300 ${activeSlide === "1" ? "border-[#202435]" : "border-[#B0B4BB]"} hover:border-[#202435]`}
              onClick={() => setSctiveSlide("1")}
            ></button>
            <button
              className={`cursor-pointer border-4 rounded-full transition-all duration-300 ${activeSlide === "2" ? " border-[#202435]" : "border-[#B0B4BB]"} hover:border-[#202435]`}
              onClick={() => setSctiveSlide("2")}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePanners;
