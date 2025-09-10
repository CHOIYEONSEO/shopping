export interface Product {
  id: number;
  title: string;
  category: "bag" | "pants" | "top" | "outerwear";
  price: number;
  images: string[];
  options?: {colors?: string[]; sizes?: string[]};
}