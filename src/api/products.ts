import axios from "axios";

export interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  description: string;
  image: string;
}

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};
