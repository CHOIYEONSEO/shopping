export interface Product {
  id: number;
  title: string;
  category: "bag" | "pants" | "top";
  price: number;
  images: string[];
  options?: {colors?: string[]; sizes?: string[]};
}