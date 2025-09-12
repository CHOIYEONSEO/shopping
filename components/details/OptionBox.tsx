import { Text, View } from "react-native";
import { SegmentedButtons } from "react-native-paper";

export default function OptionBox({
  type,
  value,
  setValue,
  options,
}: {
  type: "color" | "size";
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  options: string[];
}) {
  const title = type === "color" ? "색상" : "사이즈";

  return (
    <View style={{ gap: 7 }}>
      <Text>*{title} 선택</Text>
      <SegmentedButtons
        style={{ flex: 1, flexWrap: "wrap" }}
        value={value}
        onValueChange={setValue}
        buttons={options.map((option) => ({
          value: option,
          label: option,
          labelStyle: { fontSize: 12 },
          style: { minWidth: 100 },
        }))}
        density="small"
      />
    </View>
  );
}
