"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { FC } from "react";
import { IProductItem } from "./type";
import { useCartContext } from "@/hooks/useCartContext";

export const ProductItem: FC<IProductItem> = ({ product }) => {
  const { productId,title, description, imageUrl, price, compareAtPrice } = product;
  const { handleAddToCart } = useCartContext();

  return (
    <div className="relative overflow-hidden shadow-md rounded-lg transition-all w-full group grid-rows-subgrid flex flex-col justify-between">
      <div className="relative h-90 overflow-hidden bg-gray-100">
        <Image
          src={imageUrl}
          alt={title}
          width={320}
          height={450}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="px-4">
        <h3 className="font-medium text-lg">{title}</h3>
        <p className="mb-4 text-sm overflow-ellipsis line-clamp-2">
          {description}
        </p>
      </div>
      <div>
        <div className="flex gap-2 px-4 items-center mb-4">
          <p className="font-bold text-gray-800">{price}$</p>
          <p className="line-through text-gray-500">{compareAtPrice}$</p>
        </div>
        <div className="px-4 mb-4">
          <Button
            className="w-full cursor-pointer"
            onClick={() => {
              handleAddToCart(product);
            }}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};
