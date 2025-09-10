import { Product } from "@/types/productType";
import { axiosInstance } from "./axiosInstance";

export const getAllProducts = async () => {
  try {
    const response = await axiosInstance.get<Product[]>('/products');
    return response.data;
  } catch(e) {
    console.error("products fetch error : ", e);
  }
}