import { getProductById } from "@/api/products";
import ImageGallerySwiper from "@/components/details/ImageGallerySwiper";
import { Product } from "@/types/productType";
import { useLocalSearchParams } from "expo-router";
import { startTransition, useEffect, useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { useTheme } from "react-native-paper";

import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function DetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const insets = useSafeAreaInsets();
  const [details, setDetails] = useState<Product | null>(null);
  const theme = useTheme();

  useEffect(() => {
    startTransition(async () => {
      const data = await getProductById(Number(id));

      if (data) {
        setDetails(data);
      }
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: insets.top }}>
      <ScrollView>
        {details && (
          <>
            <ImageGallerySwiper images={details.images} />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
