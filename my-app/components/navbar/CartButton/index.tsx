'use client'
import React, { FC, useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";

interface ICartButton{
  toggleShowPreviewCart: ()=>void;
}

const CartButton:FC<ICartButton> = ({toggleShowPreviewCart}) => {
  
  return (
    <>
    <div className="text-white gap-4 p-4 rounded-full bg-black cursor-pointer" onClick={toggleShowPreviewCart}>
      <FaCartArrowDown />
    </div>
    
    </>
  );
};

export default CartButton;
