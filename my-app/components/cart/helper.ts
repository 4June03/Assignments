import { CartIem } from "@/app/api/cart/types";
import axios from "axios";
import { Product } from "@/app/products/type";
import { toast } from "sonner";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;


export const calculateSubtotal = (cartItems: CartIem[]): number => {
  return cartItems.reduce((sum, curr) => {
    if (curr.quantity === 0) return sum;
    const priceNumber = parseFloat(curr.price.replace(/[^0-9.]/g, ""));
    return sum + curr.quantity * priceNumber;
  }, 0);
};
