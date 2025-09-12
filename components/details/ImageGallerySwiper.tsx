import { Dimensions, Image, View } from "react-native";
import { useTheme } from "react-native-paper";
import Swiper from "react-native-swiper";

export default function ImageGallerySwiper({ images }: { images: string[] }) {
  const { width } = Dimensions.get("window");
  const theme = useTheme();

  return (
    <View>
      <Swiper
        height={340}
        showsPagination
        dotStyle={{
          backgroundColor: theme.colors.primaryContainer,
          width: 6,
          height: 6,
        }}
        activeDotStyle={{
          backgroundColor: theme.colors.primary,
          width: 16,
          height: 6,
          borderRadius: 3,
        }}
      >
        {images.map((uri, i) => (
          <View key={i}>
            <Image
              source={{ uri }}
              style={{ width, height: 320 }}
              // resizeMode="contain"
            />
          </View>
        ))}
      </Swiper>
    </View>
  );
}
