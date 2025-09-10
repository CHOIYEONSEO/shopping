import CategoryModal from "@/components/home/CategoryModal";
import ProductsList from "@/components/home/ProductsList";
import { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: insets.top }}>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Searchbar
          placeholder="상품명 입력"
          value={search}
          onChangeText={setSearch}
        />
        <CategoryModal />

        <ProductsList />
      </View>
    </SafeAreaView>
  );
}
