import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import axios from "axios";

export interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  description: string;
  image: string;
}

export interface Filters {
  category: string;
  priceRange: [number, number];
  searchQuery: string;
}

interface ProductContextProps {
  products: Product[];
  filteredProducts: Product[];
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

interface ProductProviderProps {
  children: ReactNode;
}

const ProductContext = createContext<ProductContextProps | undefined>(
  undefined
);

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};

export const ProductProvider: React.FC<ProductProviderProps> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState<Filters>({
    category: "",
    priceRange: [0, 1000],
    searchQuery: "",
  });

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
      setFilteredProducts(response.data);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const filterProducts = () => {
      const filtered = products.filter(
        (product) =>
          (filters.category ? product.category === filters.category : true) &&
          product.price >= filters.priceRange[0] &&
          product.price <= filters.priceRange[1] &&
          product.title
            .toLowerCase()
            .includes(filters.searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    };
    filterProducts();
  }, [filters, products]);

  return (
    <ProductContext.Provider
      value={{ products, filteredProducts, filters, setFilters }}
    >
      {children}
    </ProductContext.Provider>
  );
};
