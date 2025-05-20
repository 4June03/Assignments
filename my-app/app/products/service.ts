import { Product } from "./type";

export const getProducts = async () => {
  const res = await fetch(`http://localhost:3000/api/get-products`);
  if (!res.ok) {
    throw new Error(`Lỗi khi lấy sản phẩm: ${res.status}`);
  }
  const products: Product[] = await res.json();
  console.log("ds products", products);
  return products;
};

export const getProductById = async (productId: string) => {
  const res = await fetch(
    `http://localhost:3000/api/get-products/${productId}`
  );
  if (!res.ok) {
    throw new Error(`Lỗi khi lấy sản phẩm: ${res.status}`);
  }
  const data = await res.json();
  return data.product;
};
