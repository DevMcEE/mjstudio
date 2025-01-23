import { NextResponse, NextRequest} from "next/server";
import { TIME_DATA } from "./data";

export async function GET(request: NextRequest){
    try {
        return NextResponse.json(
          TIME_DATA,
          { status: 200 }
        );
    } catch (error) {
    return NextResponse.json(
        { error: `Internal Server Error: ${error}` },
        { status: 500 }
    );
    }
}