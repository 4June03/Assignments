"use client";
import React, { FC, useContext, useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import styles from "./CartPreview.module.css";
import { Button } from "@/components/ui/button";
import { CartPreviewItem } from "../CartPreviewItem";
import Link from "next/link";
import { CartPreviewEmpty } from "../CartPreviewEmpty";
import { useCartContext } from "@/hooks/useCartContext";
interface IcartPreview {
  isShowPreviewCart: boolean;
  togglePreviewCart: () => void;
}

export const CartPreview: FC<IcartPreview> = ({
  isShowPreviewCart,
  togglePreviewCart,
}) => {
  
  const {cartItems, loadCart, subTotal } = useCartContext();

  useEffect(()=>{
    loadCart();
  },[])
 
  

  return (
    isShowPreviewCart && (
      <>
        <div
          className={`min-w-[320px] h-screen max-h-[60vh] md:max-h-screen md:rounded-l-3xl ml-auto bg-white text-black w-full md:w-[50vw] xl:w-[30vw] fixed top-0 right-0 bottom-0 z-400 flex flex-col py-5 px-4`}
        >
          <div className={`${styles.header}`}>
            <h2>Your cart</h2>
            <Button
              variant={"ghost"}
              size={"icon"}
              className="cursor-pointer hover:scale-105 font-semibold"
              onClick={togglePreviewCart}
            >
              <IoCloseSharp className="h-5 w-5" />
            </Button>
          </div>
          <div className={styles.content}>
            {cartItems?.length ? (
              cartItems.map((item, index) => (
                <CartPreviewItem
                  key={index}
                  cartItem={item}
                />
              ))
            ) : (
              <CartPreviewEmpty />
            )}
          </div>
          <div className={styles.footer}>
            <div className="w-full flex justify-between items-center text-sm font-semibold">
              <h3>tạm tính</h3>
              <p>{subTotal.toFixed(2)}$</p>
            </div>
            <Button
              className="w-2/4 mx-auto transition-all duration-300 hover:scale-105"
              onClick={togglePreviewCart}
            >
              <Link href={"/cart"}>Check out</Link>
            </Button>
            <Link
              href={"/products"}
              className="text-sm underline"
              onClick={togglePreviewCart}
            >
              continue shopping
            </Link>
          </div>
        </div>
      </>
    )
  );
};
