import { useState } from "react";

function ImageSlide({ images, title }) {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="max-w-xl mx-auto">
      <div className="relative flex items-center md:w-96 shadow-lg rounded-xl p-2 sm:p-4">
        <img
          src={images[activeSlide]}
          className="rounded-md transition-all duration-300 hover:scale-105 object-contain"
          alt={title}
        />

        <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 hover:bg-[#9B9BB4] hover:scale-125 ${
                activeSlide === idx ? "bg-[#9B9BB4] scale-125" : "bg-[#D9D9E9]"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageSlide;
