import React from "react";
import { useProductContext } from "../context/ProductContext";

const ProductFilter: React.FC = () => {
  const { filters, setFilters } = useProductContext();

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, category: e.target.value });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maxPrice = parseInt(e.target.value, 10);
    setFilters({ ...filters, priceRange: [0, maxPrice] });
  };

  return (
    <div className="bg-white p-4 rounded-lg border-2 mb-6">
      <h4 className="text-lg font-semibold text-gray-900 mb-4 underline">
        Filter Products
      </h4>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Category</label>
        <select
          className="w-full p-2 border border-gray-300 rounded-md"
          onChange={handleCategoryChange}
          value={filters.category}
        >
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Max Price</label>
        <input
          type="range"
          min="50"
          max="1000"
          step="50"
          className="w-full"
          onChange={handlePriceChange}
          value={filters.priceRange[1]}
        />
        <span className="text-gray-900 font-semibold">
          ${filters.priceRange[1]}
        </span>
      </div>
    </div>
  );
};

export default ProductFilter;
