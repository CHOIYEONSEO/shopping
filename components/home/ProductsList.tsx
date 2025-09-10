import { getAllProducts, getProductsByTitle } from "@/api/products";
import { Product } from "@/types/productType";
import { useEffect, useState, useTransition } from "react";
import { FlatList, View } from "react-native";
import ProductCard from "./ProductCard";

export default function ProductsList({ search }: { search: string }) {
  const [products, setProducts] = useState<Product[]>();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      if (search?.trim()) {
        const data = await getProductsByTitle(search.trim());
        if (data) {
          setProducts(data);
          console.log(data);
        }
      } else {
        const data = await getAllProducts();
        if (data) {
          setProducts(data);
          console.log(data);
        }
      }
    });
  }, [search]);

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
