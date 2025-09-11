import { getAllProducts } from "@/api/products";
import { Product } from "@/types/productType";
import { Sortkey } from "@/types/sortkeyType";
import { useEffect, useState, useTransition } from "react";
import { FlatList, View } from "react-native";
import ProductCard from "./ProductCard";

export default function ProductsList({
  search,
  categories,
  sortkey,
}: {
  search: string;
  categories: string[];
  sortkey: Sortkey;
}) {
  const [products, setProducts] = useState<Product[]>();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const data = await getAllProducts({
        search: search?.trim() || undefined,
        categories:
          categories && categories.length > 0 ? categories : undefined,
        sortkey,
      });

      if (data) {
        setProducts(data);
      }
    });
  }, [search, categories, sortkey]);

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
