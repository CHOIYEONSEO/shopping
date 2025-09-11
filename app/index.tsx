import CategoryBox from "@/components/home/CategoryBox";
import ProductsList from "@/components/home/ProductsList";
import { useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => setSearch(input), 300);
    return () => clearTimeout(timer);
  }, [input]);

  useEffect(() => {
    if (search) {
      console.log("검색 요청 : ", search);
    }
  }, [search]);

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: insets.top }}>
      <View style={{ paddingHorizontal: 12, paddingBottom: 8 }}>
        <Searchbar
          placeholder="상품명 입력"
          value={input}
          onChangeText={setInput}
        />
        <View>
          <CategoryBox filter={categories} onChangeFilter={setCategories} />
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <ProductsList search={search} categories={categories} />
      </View>
    </SafeAreaView>
  );
}
