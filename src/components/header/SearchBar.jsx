import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!query.trim()) return;
    navigate(`/searchresults/${query.trim()}`);
    setQuery("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-[#F3F4F7] rounded-lg px-4 py-3 my-2 md:my-0 w-full md:w-[60%] order-last md:order-1 transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm hover:shadow-lg"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for products, fruits, meat, eggs..."
        className="flex-1 bg-transparent focus:outline-none font-medium text-sm md:text-base text-color placeholder:text-[#A0A3AD]"
      />

      <button type="submit">
        <i className="fa-solid fa-magnifying-glass text-xl text-[#989CA8] hover:text-main transition" />
      </button>
    </form>
  );
}

export default SearchBar;
