import { Button } from "@/components/ui/button";
import { useCartContext } from "@/hooks/useCartContext";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { IoMdClose } from "react-icons/io";
import { CartIem } from "../type";
import { QuantitySelector } from "./QuantitySelector";

export interface IcartPreviewItem {
  cartItem: CartIem;
}

export const CartPreviewItem: FC<IcartPreviewItem> = ({ cartItem }) => {
  const { handleRemoveFromCart } = useCartContext();

  return (
    <div className="flex justify-between py-2 gap-4 border-t-[1px] border-t-gray-800">
      <div className="relative w-24 h-24 shrink-0 overflow-hidden border-2 rounded-md">
        <Image
          src={cartItem?.imageUrl}
          alt="ảnh preview cart item"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="flex flex-col flex-1 text-sm ">
        <Link href="/" className="font-semibold">
          {cartItem.title}
        </Link>
        <p className="w-full overflow-ellipsis line-clamp-3 mt-2 flex-1">
          {cartItem.description}
        </p>
        <div className="w-full flex items-center justify-between">
          <div className="flex gap-2">
            <span className="font-semibold">{cartItem.price}$</span>
            <span className="line-through text-gray-500">
              {cartItem.compareAtPrice}$
            </span>
          </div>
          <div>
            <QuantitySelector productId={cartItem.productId} />
          </div>
        </div>
      </div>
      <Button
        className="cursor-pointer"
        variant={"ghost"}
        size={"sm"}
        onClick={() => handleRemoveFromCart(cartItem.productId)}
      >
        <IoMdClose />
      </Button>
    </div>
  );
};
