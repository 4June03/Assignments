'use client'
import { useCartContext } from "@/hooks/useCartContext";
import React, { FC } from "react";
import { FaCartArrowDown } from "react-icons/fa";

interface ICartButton{
  toggleShowPreviewCart: ()=>void;
}

const CartButton:FC<ICartButton> = ({toggleShowPreviewCart}) => {
  
  const {totalItems} = useCartContext();

  return (
    <>
    <div className="relative text-white gap-4 p-4 rounded-full bg-black cursor-pointer z-50" onClick={toggleShowPreviewCart}>
      <FaCartArrowDown />
      <p className="text-sm font-semibold absolute bottom-0 left-1/2 transform -translate-x-1/2">{totalItems}</p>
    </div>
    
    </>
  );
};

export default CartButton;
