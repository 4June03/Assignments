import { CartIem } from "./type";

export const calculateSubtotal = (cartItems: CartIem[]): number => {
  return cartItems.reduce((sum, curr) => {
    if (curr.quantity === 0) return sum;
    const priceNumber = parseFloat(curr.price.replace(/[^0-9.]/g, ""));
    return sum + curr.quantity * priceNumber;
  }, 0);
};
