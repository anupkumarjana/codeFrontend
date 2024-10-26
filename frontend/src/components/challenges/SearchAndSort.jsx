import React, { useState } from "react";

const difficultyOrder = { Easy: 1, Medium: 2, Hard: 3 }; // Mapping difficulty to numeric values

const SearchAndSort = ({ data, setFilteredData }) => {
  const [searchText, setSearchText] = useState("");
  const [sortCriteria, setSortCriteria] = useState("title"); // 'title' or 'difficulty'
  const [sortOrder, setSortOrder] = useState("asc"); // 'asc' or 'desc'

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleSort = (criteria) => {
    const sorted = [...data].sort((a, b) => {
      if (criteria === "title") {
        return sortOrder === "asc"
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      } else if (criteria === "difficulty") {
        return sortOrder === "asc"
          ? difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]
          : difficultyOrder[b.difficulty] - difficultyOrder[a.difficulty];
      }
      return 0;
    });

    setFilteredData(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setSortCriteria(criteria);
  };

  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="w-[60%] bg-transparent rounded-md border border-[#282828] outline-none p-2 text-sm"
        value={searchText}
        onChange={handleSearch}
      />
      <button
        onClick={() => handleSort("title")}
        className="p-2 border border-[#282828] rounded-md text-sm"
      >
        {sortOrder === "asc" && sortCriteria === "title"
          ? "Sort Title ↓"
          : "Sort Title ↑"}
      </button>
      <button
        onClick={() => handleSort("difficulty")}
        className="p-2 border border-[#282828] rounded-md text-sm"
      >
        {sortOrder === "asc" && sortCriteria === "difficulty"
          ? "Sort Difficulty ↓"
          : "Sort Difficulty ↑"}
      </button>
    </div>
  );
};

export default SearchAndSort;
