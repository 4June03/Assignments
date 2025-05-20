import { connectDBRaw } from "@/lib/connect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  {params}: { params: Promise<{ productId: string }> }
) => {
  const { productId } = await params;

  if (!productId) {
    return NextResponse.json(
      { message: "productId không được truyền vào" },
      { status: 400 }
    );
  }

  try {
    const client = await connectDBRaw();
    const db = client.db("huunghiadb");
    const col = db.collection("products");
    const product = await col.findOne({ productId });

    if (!product) {
      return NextResponse.json(
        { message: "Không tìm thấy product" },
        { status: 404 }
      );
    }

    return NextResponse.json({ product }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      console.error("GET /api/products/[productId] error:", error);
      return NextResponse.json(
        { message: "Lỗi phía server", error: error.message },
        { status: 500 }
      );
    }
  }
};
