import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handelSubmit(e) {
    e.preventDefault();

    if (!query) return;
    navigate(`/searchresults/${query}`);
    setQuery("");
  }

  return (
    <form
      onSubmit={handelSubmit}
      className="flex items-center justify-between w-[64%] bg-[#F3F4F7] px-4 py-3 rounded-lg"
    >
      <input
        type="text"
        value={query}
        placeholder="Search for Products, fruit, meat, eggs. etc... "
        className="w-[60%] font-semibold focus:outline-none text-[#3E445A]"
        onChange={(e) => setQuery(e.target.value)}
      />

      <span>
        <i className="fa-solid fa-magnifying-glass text-2xl text-[#989CA8]"></i>
      </span>
    </form>
  );
}

export default SearchBar;
