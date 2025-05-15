"use client";
import React, { createContext, useEffect, useState } from "react";

import { calculateSubtotal } from "./helper";
import { CartContextType } from "./CartPreview/type";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { Product } from "@/app/products/type";
import { CartIem } from "./type";

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartIem[]>([]);
  const [subTotal, setSubTotal] = useState<number>(0);
  const CART_KEY = "cartItems";

  const loadCart = () => {
    const cartItems = getCookiesData(CART_KEY) || [];
    setCartItems(cartItems);
  };

  const handleAddToCart = (product: Product) => {
    if (!product.productId) return;

    const cart: CartIem[] = getCookiesData(CART_KEY);

    const existingIndex = cart.findIndex(
      (item) => item.productId === product.productId
    );

    console.log("data cart", cart);
    console.log("data index", existingIndex);

    existingIndex !== -1
      ? (cart[existingIndex].quantity += 1)
      : cart.push({ ...product, quantity: 1 });

    toast.success("added to card");

    setCookiesData(CART_KEY, cart, 2);

    setCartItems(cart);
  };

  const handleRemoveFromCart = (productId: string) => {
    const items: any[] = getCookiesData(CART_KEY);
    const newCartItems = items.filter((item) => item.productId !== productId);
    setCookiesData(CART_KEY, newCartItems, 2);
    setCartItems(newCartItems);
  };

  const handleChangeQuantity = (type: string, productId: string, value?:number) => {
    const cart: CartIem[] = getCookiesData(CART_KEY);
    console.log("data cart", cart);
    const existingIndex = cart.findIndex(
      (item) => item.productId === productId
    );
  
    if (existingIndex !== -1) {
      switch (type) {
        case "increase":
          cart[existingIndex].quantity += 1;
          break;
        case "decrease":
          if (cart[existingIndex].quantity > 1) {
            cart[existingIndex].quantity -= 1;
          }
          break;
        case "set":
          if (typeof value === "number") {
            cart[existingIndex].quantity = value;
          }
          break;
      }

      setCartItems(cart);
      setCookiesData(CART_KEY, cart);
    }
  };

  const getCookiesData = (key: string) => {
    return JSON.parse(Cookies.get(key) || "[]");
  };

  const setCookiesData = (key: string, data: any, expireTime?: number) => {
    const stringTifiedData = JSON.stringify(data);
    Cookies.set(key, stringTifiedData, { expires: expireTime });
  };

  useEffect(() => {
    loadCart();
  }, []);

  useEffect(() => {
    const newSubtotal = calculateSubtotal(cartItems);
    setSubTotal(newSubtotal);
  }, [cartItems]);

  const value: CartContextType = {
    cartItems,
    subTotal,
    handleAddToCart,
    handleRemoveFromCart,
    loadCart,
    getCookiesData,
    setCookiesData,
    handleChangeQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
