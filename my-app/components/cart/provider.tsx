"use client";
import React, { createContext, useEffect, useState } from "react";

import { calculateSubtotal } from "./helper";
import { CartContextType } from "./CartPreview/type";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { Product } from "@/app/products/type";
import { CartIem } from "./type";

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  subTotal: 0,
  handleAddToCart: () => {},
  handleRemoveFromCart: () => {},
  loadCart: () => {},
  getCookiesData: () => [],
  setCookiesData: () => {},
  handleChangeQuantity: () => {},
  isShowPreviewCart: false,
  toggleShowPreviewCart: () => {},
  totalItems: 0,
  setTotalItems: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartIem[]>([]);
  const [subTotal, setSubTotal] = useState<number>(0);
  const [isShowPreviewCart, setIsShowPreviewCart] = useState<boolean>(false);
  const [totalItems, setTotalItems] = useState<number>(0);

  const CART_KEY = "cartItems";

  const loadCart = () => {
    const cartItems = getCookiesData(CART_KEY) || [];
    setCartItems(cartItems);
  };

  const toggleShowPreviewCart = () => {
    setIsShowPreviewCart((prev) => !prev);
  };

  const handleAddToCart = (product: Product) => {
    if (!product.productId) return;

    const cart: CartIem[] = getCookiesData(CART_KEY);

    const existingIndex = cart.findIndex(
      (item) => item.productId === product.productId
    );

    console.log("data cart", cart);
    console.log("data index", existingIndex);

    if (existingIndex !== -1) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    toast.success("added to card");
    setIsShowPreviewCart(true);
    setCookiesData(CART_KEY, cart, 2);
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    sessionStorage.setItem(CART_KEY, JSON.stringify(cart));
    setCartItems(cart);
  };

  const handleRemoveFromCart = (productId: string) => {
    const items: CartIem[] = getCookiesData(CART_KEY);
    const newCartItems = items.filter((item) => item.productId !== productId);
    setCookiesData(CART_KEY, newCartItems, 2);
    localStorage.setItem(CART_KEY, JSON.stringify(newCartItems));
    sessionStorage.setItem(CART_KEY, JSON.stringify(newCartItems));

    setCartItems(newCartItems);
  };

  const handleChangeQuantity = (
    type: string,
    productId: string,
    value?: number
  ) => {
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
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
      sessionStorage.setItem(CART_KEY, JSON.stringify(cart));
    }
  };

  const getCookiesData = (key: string) => {
    return JSON.parse(Cookies.get(key) || "[]");
  };

  const setCookiesData = (key: string, data: CartIem[], expireTime?: number) => {
    const stringTifiedData = JSON.stringify(data);
    Cookies.set(key, stringTifiedData, { expires: expireTime });
  };

  useEffect(() => {
    loadCart();
  }, []);

  useEffect(() => {
    const newSubtotal = calculateSubtotal(cartItems);
    setSubTotal(newSubtotal);
    const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    setTotalItems(count);
    console.log("Tổng số lượng sản phẩm trong giỏ hàng:", count);
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
    isShowPreviewCart,
    toggleShowPreviewCart,
    totalItems,
    setTotalItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
