import { Stack } from "expo-router";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    secondary: "yellow",
  },
};

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="product/[id]" options={{ headerShown: false }} />
        </Stack>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
