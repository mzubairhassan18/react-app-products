import { render } from "@testing-library/react";
import ProductCard from "../ProductCard";
import { BrowserRouter } from "react-router-dom";
import { Product } from "../../api/products"; // Ensure the correct path to your Product type
import "@testing-library/jest-dom";

const mockProduct: Product = {
  id: 1,
  title: "Test Product",
  category: "Electronics",
  price: 99.99,
  description: "This is a test product.",
  image: "https://via.placeholder.com/150",
};

describe("ProductCard", () => {
  it("renders the product title, category, and price", () => {
    const { getByText, getByAltText } = render(
      <BrowserRouter>
        <ProductCard product={mockProduct} />
      </BrowserRouter>
    );

    expect(getByText("Test Product")).toBeInTheDocument();
    expect(getByText("Electronics")).toBeInTheDocument();
    expect(getByText("$99.99")).toBeInTheDocument();

    const imgElement = getByAltText("Test Product");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", mockProduct.image);
  });
});
