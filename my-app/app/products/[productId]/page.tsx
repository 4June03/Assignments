import { ProductDetails } from "@/components/products";

import React from "react";
import { getProductById } from "../service";

interface PageProps {
  params: Promise<{
    productId: string;
  }>;
}

const ProductDetailPage = async ({ params }: PageProps) => {
  const { productId } = await params;

  const product = await getProductById(productId);
  console.log("product", product);

  return <ProductDetails product={product} />;
};

export default ProductDetailPage;
