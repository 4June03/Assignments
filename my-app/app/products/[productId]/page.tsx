import { ProductDetails } from "@/components/products";

import React from "react";
import { Product } from "../type";
import axios from "axios";

const ProductDetailPage = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const { productId } = params;
  const res = await axios.get(
    `${baseUrl}/api/get-products/${productId}`
  );
  const { product } = res.data;
  console.log("product", product);
  return <ProductDetails product={product} />;
};

export default ProductDetailPage;
