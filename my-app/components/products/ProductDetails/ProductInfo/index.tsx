import { Product } from "@/app/products/type";
import { QuantitySelector } from "@/components/cart/CartPreviewItem/QuantitySelector";
import { Button } from "@/components/ui/button";
import React, { FC } from "react";

interface ProductDetailInfoProps {
  product: Product;
}

export const ProductDetailInfo:FC<ProductDetailInfoProps> = ({product}) => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-2xl md:text-3xl font-bold">{product.title}</h1>
      <p className="text-gray-600 leading-relaxed">
        {product.description}
      </p>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold">{product.price} $</span>
          <span className="text-gray-500 line-through">{product.compareAtPrice} $</span>
        </div>
      </div>

      <Button className="w-full">Add to cart</Button>
    </div>
  );
};
