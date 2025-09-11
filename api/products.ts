import { Product } from "@/types/productType";
import { Sortkey } from "@/types/sortkeyType";
import { axiosInstance } from "./axiosInstance";

export const getAllProducts = async (options?: {
  search?: string;
  categories?: string[];
  sortkey?: Sortkey;
}) => {
  try {
    const params: any = {};

    if (options?.search?.trim()) {
      params.title_like = options.search.trim();
    }

    if (options?.categories && options.categories.length > 0) {
      params.category_like = options.categories.join("|");
    }

    switch(options?.sortkey) {
      case "price_asc" :
        params._sort = "price";
        params._order = "asc";
        break;
      case "price_desc" :
        params._sort = "price";
        params._order = "desc";
        break;
      default:
        params._sort = "id";
        params._order = "desc";
    }

    const response = await axiosInstance.get<Product[]>('/products', {params});
    return response.data;
  } catch(e: any) {
    console.error("products fetch error : ", e.message);
  }
}

export const getCategories = async () => {
  try {
    const response = await axiosInstance.get<Product[]>('/products');
    const categorySet = new Set<string>();
    if (response.data) {
      response.data.forEach((d) => d.category && categorySet.add(d.category));
      return Array.from(categorySet);
    }
    return [];
  } catch (e: any) {
    console.error("categories fetch error : ", e.message);
  }
}