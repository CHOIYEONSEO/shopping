import { Stack } from "expo-router";
import { MD3LightTheme as DefaultTheme, PaperProvider } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
}

export default function RootLayout() {
  return (
    <PaperProvider theme={theme}>
      <Stack>
        <Stack.Screen name="index" options={{ title: "홈" }} />
        <Stack.Screen name="product/[id]" options={{ title: "상품 상세" }} />
      </Stack>
    </PaperProvider>
  );
}
