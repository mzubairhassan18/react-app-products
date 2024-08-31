import React from "react";
import { useProductContext } from "../context/ProductContext";

const SearchBar: React.FC = () => {
  const { filters, setFilters } = useProductContext();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, searchQuery: e.target.value });
  };

  return (
    <div className="sticky top-0 z-10 bg-white p-4 rounded-lg shadow-md mb-4">
      <input
        type="text"
        placeholder="Search for products..."
        className="w-full p-4 border border-gray-300 bg-white-700 rounded-lg"
        onChange={handleSearch}
        value={filters.searchQuery}
      />
    </div>
  );
};

export default SearchBar;
