import { Variant1 } from ".";

export function getColorByVariant(variant: Variant1) {
  switch (variant) {
    case "dark":
      return "bg-black";
    case "light":
      return "bg-white";
    default:
      return "";
  }
}
