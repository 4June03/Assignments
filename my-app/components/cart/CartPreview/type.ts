import { Product } from "@/app/products/type";
import { CartIem } from "../type";


export interface CartContextType {
  cartItems: CartIem[]; 
  subTotal: number;
  handleRemoveFromCart: (productId: string) => void;
  handleAddToCart: (product: Product) => void;
  loadCart: () => void;
  getCookiesData?: (key: string)=>any;
  setCookiesData?: (key:string, data: any, expireTime: number)=>void;
  handleChangeQuantity: (type:string, productId:string, value?:number) => void;
}