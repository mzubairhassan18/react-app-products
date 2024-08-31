import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { products } = useProductContext();
  const navigate = useNavigate();

  if (!id) {
    return <p>Invalid product ID.</p>;
  }

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="w-full max-w-screen-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-6 p-6">
      <div className="flex justify-start mb-6">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-auto object-contain rounded-lg"
          loading="lazy" // Lazy loading
        />
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {product.title}
          </h2>
          <p className="text-gray-700 text-lg mb-4">{product.category}</p>
          <p className="text-gray-600 text-sm mb-6">{product.description}</p>
          <p className="text-3xl font-bold text-red-600">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
