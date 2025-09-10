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
    <FlatList
      data={products}
      numColumns={2}
      columnWrapperStyle={{ gap: 10 }}
      contentContainerStyle={{ gap: 10, paddingBottom: 24 }}
      renderItem={({ item }) => (
        <View style={{ width: "48%" }}>
          <ProductCard item={item} />
        </View>
      )}
    />
  );
}
