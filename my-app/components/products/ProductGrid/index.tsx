import { Product } from "@/app/products/type";
import React, { FC } from "react";
import { ProductItem } from "../ProductItem";

interface IProductGrid {
  products?: Product[];
}

export const ProductGrid: FC<IProductGrid> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 grid-rows-4">
      {(products || []).map((item) => (
        <ProductItem key={item.title} product={item}/>
      ))}
    </div>
  );
};
