import { getAllProducts } from "@/api/products";
import { Product } from "@/types/productType";
import { startTransition, useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import ProductCard from "./ProductCard";

export default function ProductsList() {
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    startTransition(async () => {
      const data = await getAllProducts();
      if (data) {
        setProducts(data);
      }
    });
  }, []);
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard item={item} />}
      />
    </View>
  );
}
