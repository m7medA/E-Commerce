import { useEffect, useState } from "react";
import { fetchProductsByLimit } from "../../utils/fetches";
import Spinner from "../../components/Spinner";
import ProductContianer from "./ProductContianer";

function DisPlayProducts({ pagination = false, limit = 5, skipValue = 0 }) {
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(skipValue);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const { products } = await fetchProductsByLimit(limit, skip);
      setData(products);
      setIsLoading(false);
    };
    fetchData();
  }, [skip, limit]);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="md:relative">
          <ProductContianer products={data} />

          {pagination === "top" && (
            <div className="md:absolute top-50 w-full md:w-[106%] left-[-3%] flex justify-between items-center text-5xl pt-4 md:t-0 ">
              <button
                className={`text-main cursor-pointer hover:scale-110 ${skip >= 5 ? "visible" : "invisible"}`}
                onClick={() => setSkip(skip - 5)}
              >
                <i className="fa-solid fa-circle-arrow-left"></i>
              </button>

              <button
                className={`text-main cursor-pointer hover:scale-110 ${skip < 190 ? "visible" : "invisible"}`}
                onClick={() => setSkip(skip + 5)}
              >
                <i className="fa-solid fa-circle-arrow-right"></i>
              </button>
            </div>
          )}

          {pagination === "bottom" && (
            <div className="flex items-center justify-between text-base sm:text-2xl pt-8 text-[#A0A3AD]">
              <button
                className={`cursor-pointer bg-[#F3F4F7] px-4 py-2 transition-all duration-300 transform hover:-translate-y-0.2 shadow-sm hover:shadow-lg rounded-md ${skip / limit > 0 ? "visible" : "invisible"}`}
                onClick={() => setSkip(skip - limit)}
              >
                <p>page {skip / limit}</p>
              </button>

              <p>page {skip / limit + 1}</p>

              <button
                className={`cursor-pointer bg-[#F3F4F7] px-4 py-2 transition-all duration-300 transform hover:-translate-y-0.2 shadow-sm hover:shadow-lg rounded-md ${data.length === limit ? "visible" : "invisible"}`}
                onClick={() => setSkip(skip + limit)}
              >
                <p>page {skip / limit + 2}</p>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default DisPlayProducts;
