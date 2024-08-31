import React from "react";
import { useProductContext } from "../context/ProductContext";
import ProductCard from "./ProductCard";
import { FaSearch } from "react-icons/fa";

const ProductList: React.FC = () => {
  const { filteredProducts } = useProductContext();

  return (
    <div className="w-full flex flex-col items-center">
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full w-full">
          <FaSearch className="w-24 h-24 mb-4 text-gray-500" />
          <p className="text-xl font-semibold">No Products Found</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
