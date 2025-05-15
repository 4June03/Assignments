import { CartIem } from "@/app/api/cart/types";
import { calculateSubtotal, fetchCartItems, removeItemFromCart } from "@/components/cart/helper";
import { useEffect, useState } from "react";

export const useCart = () => {
    // fdsafasd
  const [cartItems, setCartItems] = useState<CartIem[]>([]);
  const [subTotal, setSubTotal] = useState<number>(0);

  const loadCart = async () => {
    try {
      const data = await fetchCartItems();
      setCartItems(data);
    } catch (err) {
      console.error("Lỗi lấy dữ liệu:", err);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  useEffect(() => {
    const newSubtotal = calculateSubtotal(cartItems);
    setSubTotal(newSubtotal);
  }, [cartItems]);

  const handleRemoveFromCart = async (productId: string) => {
    try {
      const updatedCart = await removeItemFromCart(productId);
      setCartItems(updatedCart);
    } catch (err) {
      console.error("Lỗi xóa:", err);
    }
  };

  return { cartItems, subTotal, handleRemoveFromCart, loadCart };
};