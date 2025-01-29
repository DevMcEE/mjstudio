import { NextResponse } from "next/server";
import { data } from "../data";

export async function GET() {
  try {
    return NextResponse.json(
      data,
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: `Internal Server Error: ${error}` },
      { status: 500 }
    );
  }
}