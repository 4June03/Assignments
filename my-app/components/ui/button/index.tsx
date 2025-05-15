import React from "react";
import { getColorByVariant } from "./helper";

export enum Direction {
  Light = "light",
  Dark = "dark",
  Lightblue = "lightblue",
}

export type Variant1 = "light" | "dark";

interface IButton {
  variant: Variant1;
  //   variant: "light" | "dark";
}

const Button: React.FC<IButton> = ({ variant }) => {
  if (variant === "dark") return <div className={getColorByVariant(variant)}>Button</div>;
};

export default Button;
