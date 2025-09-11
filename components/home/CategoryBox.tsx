import { getCategories } from "@/api/products";
import { startTransition, useEffect, useState } from "react";
import { View } from "react-native";
import { Chip } from "react-native-paper";

export default function CategoryBox({
  filter,
  onChangeFilter,
}: {
  filter: string[];
  onChangeFilter: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    startTransition(async () => {
      const data = await getCategories();
      if (data) {
        setCategories(data);
      }
    });
  }, []);

  const toggleCategory = (category: string) => {
    if (filter.includes(category)) {
      const newFilter = filter.filter((f) => f !== category);
      onChangeFilter(newFilter);
    } else {
      const newFilter = [...filter, category];
      onChangeFilter(newFilter);
    }
  };

  return (
    <View
      style={{
        flexDirection: "row",
        paddingTop: 5,
        gap: 3,
        alignItems: "center",
      }}
    >
      {categories.map((category) => (
        <Chip
          key={category}
          selected={filter.includes(category)}
          onPress={() => toggleCategory(category)}
          compact
        >
          {category}
        </Chip>
      ))}
    </View>
  );
}
