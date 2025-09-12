import { Product } from "@/types/productType";
import { View } from "react-native";
import { Text, useTheme } from "react-native-paper";

export default function DetailsHeader({ details }: { details: Product }) {
  const theme = useTheme();

  return (
    <View style={{ gap: 5 }}>
      <Text style={{ color: theme.colors.primary }} variant="labelLarge">
        {details.category}
      </Text>

      <Text
        variant="titleMedium"
        style={{ fontWeight: "bold", paddingBottom: 5 }}
      >
        {details.title}
      </Text>

      <Text variant="bodyMedium" style={{ paddingBottom: 12 }}>
        {details.price.toLocaleString()}원
      </Text>
    </View>
  );
}
