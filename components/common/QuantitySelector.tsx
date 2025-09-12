import { useEffect, useState } from "react";
import { View } from "react-native";
import { IconButton, TextInput } from "react-native-paper";

export default function QuantitySelector({
  count,
  setCount,
}: {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [text, setText] = useState(String(count));

  useEffect(() => {
    setText(String(count));
  }, [count]);

  const typeNumber = () => {
    const num = Number(text);

    if (!isNaN(num) && num > 0) {
      setCount(num);
      setText(String(num));
    } else {
      setText(String(count));
    }
  };

  const increase = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => Math.max(1, c - 1));

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <IconButton
        icon="minus"
        onPress={decrease}
        size={15}
        style={{ width: 40, height: 28 }}
      />

      <TextInput
        mode="outlined"
        value={text}
        keyboardType="number-pad"
        onChangeText={setText}
        onBlur={typeNumber}
        style={{ width: 60, fontSize: 13, height: 28, paddingRight: 65 }}
        contentStyle={{ textAlign: "center" }}
      />

      <IconButton
        icon="plus"
        onPress={increase}
        size={15}
        style={{ width: 40, height: 28 }}
      />
    </View>
  );
}
