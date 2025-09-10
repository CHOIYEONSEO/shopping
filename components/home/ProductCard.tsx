import { Product } from "@/types/productType";
import { router } from "expo-router";
import { Card, Text } from "react-native-paper";

export default function ProductCard({ item }: { item: Product }) {
  return (
    <Card onPress={() => router.push(`/product/${item.id}`)}>
      <Card.Cover source={{ uri: item.images[0] }} />
      <Card.Title title={item.title} subtitle={item.category} />
      <Card.Content>
        <Text variant="bodyMedium">{`${item.price.toLocaleString()}원`}</Text>
      </Card.Content>
    </Card>
  );
}
