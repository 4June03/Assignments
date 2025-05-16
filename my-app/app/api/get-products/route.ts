import Product from "@/app/products/product-model";
import { connectDB } from "@/lib/connect";

import { NextResponse } from "next/server";

export const revalidate = 300

export async function GET() {

  try {
    await connectDB();
    const products = await Product.find().sort({ createdAt: -1 });
    return NextResponse.json(products);
  } catch (error) {
    console.error(error);
    NextResponse.json({ error: 'Kết nối hoặc truy vấn thất bại' });
  }

}
