import { SafeAreaView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function DetailScreen() {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: insets.top }}>
      <View>
        <Text>[id] Component</Text>
      </View>
    </SafeAreaView>
  );
}
