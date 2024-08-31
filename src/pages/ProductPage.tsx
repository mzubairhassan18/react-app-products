import React from "react";
import ProductFilter from "../components/ProductFilter";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";

const ProductPage: React.FC = () => {
  return (
    <div className="w-full container mx-auto p-6 flex flex-col lg:flex-row gap-6">
      <aside className="w-full lg:w-1/4  sticky top-6 h-full">
        <ProductFilter />
      </aside>

      <main className="w-full lg:w-3/4 lg:flex-1">
        <SearchBar />
        <ProductList />
      </main>
    </div>
  );
};

export default ProductPage;
