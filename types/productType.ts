export interface Options {
  colors?: string[]; 
  sizes?: string[];
}

export interface Product {
  id: number;
  title: string;
  category: "가방" | "바지" | "상의" | "아우터";
  price: number;
  images: string[];
  options?: Options;
}