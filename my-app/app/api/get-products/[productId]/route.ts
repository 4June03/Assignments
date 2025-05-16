import Product from "@/app/products/product-model";
import { connectDB } from "@/lib/connect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest, { params }: { params: { productId: string } }) => {
  const { productId } = params;

    if (!productId) {
        return NextResponse.json(
        { message: "productId không được truyền vào" },
        { status: 400 }
        );
    }

  try {
    await connectDB();

    console.log("productId",typeof productId);

    const product = await Product.findOne({productId}).lean();

    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ product }, { status: 200 });
  } catch (error: any) {
    console.error("GET /api/products/[productId] error:", error);
    return NextResponse.json(
      { message: "Lỗi phía server", error: error.message },
      { status: 500 }
    );
  }
};
