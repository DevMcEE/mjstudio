import { NextResponse } from 'next/server';

export async function GET() {
  // This is a mocked response for the root route. 
  try {
    return NextResponse.json(
      { 
        title: 'MJ Studio',
        description: 'Refresh Your Look! Expert Care for Face, Head and Shoulders'
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: `Internal Server Error: ${error}` },
      { status: 500 }
    );
  }
}