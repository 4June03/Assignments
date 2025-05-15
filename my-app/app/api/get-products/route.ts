import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const file = await fs.readFile(
      process.cwd() + "/app/products/data-products.json",
      "utf8"
    );
    const data = JSON.parse(file);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
