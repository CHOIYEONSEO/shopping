import { Product } from "@/types/productType";
import { axiosInstance } from "./axiosInstance";

export const getAllProducts = async () => {
  try {
    const response = await axiosInstance.get<Product[]>('/products');
    return response.data;
  } catch(e: any) {
    console.error("products fetch error : ", e.message, e?.code, e?.response?.status, e?.response?.data);
  }
}

export const getProductsByTitle = async (search: string) => {
  try {
    const response = await axiosInstance.get<Product[]>('/products', {params: {title_like : search}});
    return response.data;
  } catch(e: any) {
    console.error("search products by title error : ", e.message);
  }
}