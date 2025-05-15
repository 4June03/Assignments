"use client";

import type React from "react";

import { Minus, Plus } from "lucide-react";
import { FC, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCartContext } from "@/hooks/useCartContext";

interface QuantitySelectorProps {
  productId: string;
  min?: number;
  max?: number;
}

export const QuantitySelector: FC<QuantitySelectorProps> = ({
  min = 1,
  max = 50,
  productId,
}) => {
  const { handleChangeQuantity, cartItems } = useCartContext();
  const item = cartItems.find((item) => item.productId === productId);
  const quantity = item?.quantity ?? min;
  const [tempValue, setTempValue] = useState(quantity.toString());

  const handleIncrease = () => {
    handleChangeQuantity("increase", productId);

    setTempValue((quantity + 1).toString());
  };
  const handleDecrease = () => {
    handleChangeQuantity("decrease", productId);
    setTempValue((quantity - 1).toString());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempValue(e.target.value);
  };

  const handleBlur = () => {
    const value = parseInt(tempValue, 10);
    if (!isNaN(value)) {
      const clamped = Math.max(min, Math.min(max, value));
      handleChangeQuantity("set", productId, clamped);
      setTempValue(clamped.toString());
    } else {
      setTempValue(quantity.toString());
    }
  };

  return (
    <div className="flex items-center">
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 rounded-r-none"
        onClick={handleDecrease}
        disabled={quantity <= min}
      >
        <Minus className="h-3 w-3" />
        <span className="sr-only">Decrease quantity</span>
      </Button>
      <Input
        type="number"
        min={min}
        max={max}
        className="h-8 w-12 rounded-none border-x-0 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        value={tempValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
      />
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 rounded-l-none"
        onClick={handleIncrease}
        disabled={quantity >= max}
      >
        <Plus className="h-3 w-3" />
        <span className="sr-only">Increase quantity</span>
      </Button>
    </div>
  );
};
