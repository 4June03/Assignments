"use client";
import React, { useEffect, useState } from "react";
import { CartSummary } from "../SummaryCard";
import { CartPreviewItem } from "../../CartPreviewItem";
import { useCartContext } from "@/hooks/useCartContext";


export const CartContainer = () => {
  const {cartItems, loadCart, subTotal, handleRemoveFromCart } = useCartContext();
  
  useEffect(()=>{
    loadCart();
  }, [])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <h2 className="text-sm text-gray-600 pb-4">danh sách sản phẩm</h2>
        {(cartItems || []).map((item) => (
          <CartPreviewItem
            cartItem={item}
            key={item.productId}
          />
        ))}

        {cartItems.length===0 && (
          <div className="pt-4 text-center">Danh sách sản phẩm trống</div>
        )}

      </div>
      <div className="lg:col-span-1 min-w-[350px] max-h-[50vh] p-4 border-t-2 border-gray-400 lg:border-none">
        <CartSummary subTotal={subTotal}/>
      </div>
    </div>
  );
};
