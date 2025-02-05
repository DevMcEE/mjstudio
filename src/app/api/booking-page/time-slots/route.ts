import { NextResponse, NextRequest} from "next/server";
import { getTimeCell } from "./data";

export async function GET(request: NextRequest){
  const {searchParams} = request.nextUrl;
  const data = searchParams.get("date");
    
  if(data){
    try {
      return NextResponse.json(
        getTimeCell(data),
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        { error: `Internal Server Error: ${error}` },
        { status: 500 }
      );
    }
  }
}