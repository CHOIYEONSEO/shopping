import { useState } from "react";
import { Text, View } from "react-native";
import { Searchbar } from "react-native-paper";

export default function HomeScreen() {
  const [search, setSearch] = useState("");

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <Searchbar
        placeholder="상품명 입력"
        value={search}
        onChangeText={setSearch}
      />
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
