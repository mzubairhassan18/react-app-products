import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../api/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border-2 rounded-lg p-5 pt-2 overflow-hidden hover:border-cyan-300 transition-shadow duration-300">
      <p className="text-white bg-gray-500 p-1 rounded-lg w-fit text-sm mb-4">
        {product.category}
      </p>
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover"
          loading="lazy"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {product.title}
          </h3>

          <p className="text-xl font-bold text-red-800  mt-auto">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
