import { NextResponse, NextRequest} from "next/server";
import { TIME_CELLS } from "./data";
export async function GET(request: NextRequest){
    const {searchParams} = request.nextUrl;
    const data = searchParams.get("date");
    
    if(data !== null){
        try {
            return NextResponse.json(
                TIME_CELLS(data),
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