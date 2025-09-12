import { Product } from "@/types/productType";
import { router } from "expo-router";
import { Dimensions } from "react-native";
import { Card, Text } from "react-native-paper";

const COLUMNS_NUM = 2;

export default function ProductCard({ item }: { item: Product }) {
  const { width } = Dimensions.get("window");
  const cardWidth = width / COLUMNS_NUM - 16;
  const cardHeight = cardWidth * 1.6;

  return (
    <Card
      onPress={() => router.push(`/product/${item.id}`)}
      style={{ flex: 1, height: cardHeight }}
    >
      <Card.Cover
        source={{ uri: item.images[0] }}
        resizeMode="contain"
        style={{ maxHeight: 160 }}
      />
      <Card.Title title={item.title} subtitle={item.category} />
      <Card.Content>
        <Text variant="labelLarge">{`${item.price.toLocaleString()}원`}</Text>
      </Card.Content>
    </Card>
  );
}
