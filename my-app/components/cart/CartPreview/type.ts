import { Product } from "@/app/products/type";
import { CartIem } from "../type";


export interface CartContextType {
  cartItems: CartIem[]; 
  subTotal: number;
  handleRemoveFromCart: (productId: string) => void;
  handleAddToCart: (product: Product) => void;
  loadCart: () => void;
  getCookiesData?: (key: string)=>CartIem[];
  setCookiesData?: (key:string, data: CartIem[], expireTime: number)=>void;
  handleChangeQuantity: (type:string, productId:string, value?:number) => void;
  isShowPreviewCart: boolean;
  toggleShowPreviewCart: () => void;
  totalItems: number;
  setTotalItems: (value: number) => void;
}