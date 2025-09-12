import { getProductById } from "@/api/products";
import QuantitySelector from "@/components/common/QuantitySelector";
import DetailsHeader from "@/components/details/DetailsHeader";
import ImageGallerySwiper from "@/components/details/ImageGallerySwiper";
import OptionContainer from "@/components/details/OptionContainer";
import { Product } from "@/types/productType";
import { useLocalSearchParams } from "expo-router";
import { startTransition, useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function DetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const insets = useSafeAreaInsets();
  const [details, setDetails] = useState<Product | null>(null);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);

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

            <View style={{ paddingRight: 13, paddingLeft: 13, gap: 5 }}>
              <DetailsHeader details={details} />

              {details.options && (
                <OptionContainer
                  options={details.options}
                  color={color}
                  setColor={setColor}
                  size={size}
                  setSize={setSize}
                />
              )}

              <View style={{ paddingTop: 13, gap: 5 }}>
                <Text>수량 선택</Text>
                <QuantitySelector count={quantity} setCount={setQuantity} />
              </View>
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
