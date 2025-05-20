import React from "react";
import { ProductGrid } from "@/components/products";
import { getProducts } from "./service";

const Page = async () => {
 
  const products = await getProducts();

  return (
    <div className="w-full mx-auto p-4">
      <ProductGrid products={products} />
    </div>
  );
};

export default Page;
