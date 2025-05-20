import { connectDBRaw } from "@/lib/connect";
// import { connectDB } from "@/lib/connect";

import { NextResponse } from "next/server";


//ISR (Incremental Static Regeneration) - Cơ chế hoạt động
// Request đầu tiên
// Chưa có cache → Next.js chạy GET(), lưu kết quả vào cache, trả dữ liệu về client.
// Các request tiếp theo trong 300 giây
// Có cache → Next.js trả dữ liệu ngay mà không chạy GET() nữa.
// Khi quá 300 giây kể từ lần cuối cache được thiết lập
// Next.js vẫn trả dữ liệu cũ ngay lập tức (stale),
// Đồng thời gọi lại GET() trong background để lấy dữ liệu mới và cập nhật cache.
// Lần kế tiếp, client sẽ nhận được dữ liệu đã được cập nhật.
export const revalidate = 300;

export async function GET() {
  try {
    const client = await connectDBRaw();
    const db = client.db("huunghiadb");
    const col = db.collection("products");
    const products = await col.find({}).toArray();

    return NextResponse.json(products);

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Kết nối hoặc truy vấn thất bại" });
  }
}
