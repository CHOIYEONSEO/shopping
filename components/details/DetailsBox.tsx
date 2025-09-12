import { Product } from "@/types/productType";
import { useState } from "react";
import { View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import OptionBox from "./OptionBox";

export default function DetailsBox({ details }: { details: Product }) {
  const theme = useTheme();
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  return (
    <View style={{ paddingLeft: 13, gap: 5, paddingRight: 13 }}>
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

      {details.options && details.options.colors && (
        <OptionBox
          type="color"
          value={color}
          setValue={setColor}
          options={details.options.colors}
        />
      )}

      {details.options && details.options.sizes && (
        <OptionBox
          type="size"
          value={size}
          setValue={setSize}
          options={details.options.sizes}
        />
      )}
    </View>
  );
}
