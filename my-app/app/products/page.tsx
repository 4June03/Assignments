import React from "react";
import { Product } from "./type";
import { ProductGrid } from "@/components/products";

const Page = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const res = await fetch(`${baseUrl}/api/get-products`);
  const products: Product[] = await res.json();
  console.log("ds products", products);

  return (
    <div className="w-full mx-auto p-4">
      <ProductGrid products={products} />
    </div>
  );
};

export default Page;
