import { NextResponse, NextRequest} from "next/server";
import { timeData } from "./data";

export async function GET(request: NextRequest){
    try {
        return NextResponse.json(
          timeData,
          { status: 200 }
        );
    } catch (error) {
    return NextResponse.json(
        { error: `Internal Server Error: ${error}` },
        { status: 500 }
    );
    }
}