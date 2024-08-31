import { render } from "@testing-library/react";
import ProductList from "../ProductList";
import { useProductContext } from "../../context/ProductContext";
import { BrowserRouter } from "react-router-dom";

// Mock the useProductContext hook
jest.mock("../context/ProductContext", () => ({
  useProductContext: jest.fn(),
}));

const mockProducts = [
  {
    id: 1,
    title: "Test Product 1",
    category: "Electronics",
    price: 99.99,
    description: "This is a test product 1.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Test Product 2",
    category: "Jewelery",
    price: 199.99,
    description: "This is a test product 2.",
    image: "https://via.placeholder.com/150",
  },
];

describe("ProductList", () => {
  it("renders a list of products when filteredProducts is not empty", () => {
    // Mock the context to return products
    (useProductContext as jest.Mock).mockReturnValue({
      filteredProducts: mockProducts,
    });

    const { getByText, getAllByRole } = render(
      <BrowserRouter>
        <ProductList />
      </BrowserRouter>
    );

    // Check that the products are rendered
    expect(getByText("Test Product 1")).toBeInTheDocument();
    expect(getByText("Test Product 2")).toBeInTheDocument();

    // Check that the correct number of product cards are rendered
    const productCards = getAllByRole("link"); // assuming each product card is wrapped in a Link
    expect(productCards.length).toBe(2);
  });

  it("renders 'No Products Found' message when filteredProducts is empty", () => {
    // Mock the context to return an empty product list
    (useProductContext as jest.Mock).mockReturnValue({
      filteredProducts: [],
    });

    const { getByText, getByRole } = render(
      <BrowserRouter>
        <ProductList />
      </BrowserRouter>
    );

    // Check that the "No Products Found" message is displayed
    expect(getByText("No Products Found")).toBeInTheDocument();

    // Check that the search icon is displayed
    const searchIcon = getByRole("img", { hidden: true }); // React-icons are treated as an img element
    expect(searchIcon).toBeInTheDocument();
  });
});
