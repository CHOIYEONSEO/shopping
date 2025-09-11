import { Sortkey } from "@/types/sortkeyType";
import { useState } from "react";
import { Button, Menu } from "react-native-paper";

export default function SortButton({
  sortkey,
  setSortkey,
}: {
  sortkey: Sortkey;
  setSortkey: React.Dispatch<React.SetStateAction<Sortkey>>;
}) {
  const [isVisible, setIsVisible] = useState(false);

  const label =
    sortkey === "latest"
      ? "최신순"
      : sortkey === "price_asc"
      ? "가격 낮은순"
      : "가격 높은순";

  const selectMenu = (selected: Sortkey) => {
    setSortkey(selected);
    setIsVisible(false);
  };

  return (
    <Menu
      visible={isVisible}
      onDismiss={() => setIsVisible(false)}
      anchor={<Button onPress={() => setIsVisible(true)}>{label}</Button>}
    >
      <Menu.Item onPress={() => selectMenu("latest")} title="최신순" />
      <Menu.Item onPress={() => selectMenu("price_asc")} title="가격 낮은순" />
      <Menu.Item onPress={() => selectMenu("price_desc")} title="가격 높은순" />
    </Menu>
  );
}
