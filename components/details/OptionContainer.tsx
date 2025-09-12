import { Options } from "@/types/productType";
import OptionBox from "./OptionBox";

export default function OptionContainer({
  options,
  color,
  setColor,
  size,
  setSize,
}: {
  options: Options;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  size: string;
  setSize: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <>
      {options.colors && (
        <OptionBox
          type="color"
          value={color}
          setValue={setColor}
          options={options.colors}
        />
      )}

      {options.sizes && (
        <OptionBox
          type="size"
          value={size}
          setValue={setSize}
          options={options.sizes}
        />
      )}
    </>
  );
}
