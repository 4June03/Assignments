import React, { FC } from "react";
import styles from "./SummaryCard.module.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PiWarningCircleLight } from "react-icons/pi";

export interface ICartSummary{
    subTotal: number;
}

export const CartSummary:FC<ICartSummary> = ({subTotal}) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-md uppercase">Order sumary</h3>
      <div className="flex flex-col gap-4">
        <h3 className="text-sm flex gap-2 items-center">
          nhập mã giảm giá{" "}
          <span className="text-gray-400">
            <PiWarningCircleLight />
          </span>
        </h3>
        <div className="flex gap-4">
          <Input className="border-2" />
          <Button variant={"default"}>Áp dụng</Button>
        </div>
      </div>
      <div className={`${styles.totalPrice}`}>
        <p>tạm tính</p>
        <p>{subTotal.toFixed(2)}$</p>
      </div>
      <div className={`${styles.totalPrice}`}>
        <p>Tổng tiền</p>
        <p>{(subTotal+20).toFixed(2)}$</p>
      </div>
      <Button>Check out</Button>
    </div>
  );
};
