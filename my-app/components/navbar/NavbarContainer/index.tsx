"use client";
import React, { useEffect, useState } from "react";
import NavbarMenu from "../NavbarMenu";
import LoginButton from "../LoginButton";
import { CartButton, NavBarLogo } from "..";
import { CartPreview } from "@/components/cart";
import { useCartContext } from "@/hooks/useCartContext";

const NavbarContainer = () => {
  const [isSticky, setIsSticky] = useState(false);
  const {isShowPreviewCart, toggleShowPreviewCart} = useCartContext();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <div
        className={`w-full bg-none flex justify-between items-center py-2 mt-14 px-10 sticky top-0 left-0 z-200 transition-colors duration-500 ${
          isSticky ? "md:bg-transparent" : "md:bg-black "
        }`}
      >
        <NavBarLogo />
        <NavbarMenu isSticky={isSticky} />
        <div className="flex items-center gap-4">
          <LoginButton />
          <CartButton toggleShowPreviewCart={toggleShowPreviewCart} />
        </div>
      </div>

      {isShowPreviewCart && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 z-300 pointer-events-auto"
            onClick={toggleShowPreviewCart}
          ></div>
          <CartPreview
            isShowPreviewCart={isShowPreviewCart}
            togglePreviewCart={toggleShowPreviewCart}
          />
        </>
      )}
    </>
  );
};

export default NavbarContainer;
