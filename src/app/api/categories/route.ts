// app/api/categories/route.ts
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/dbConnect";
import TreatmentCategory from "@/models/categories";

export async function GET() {
  try {
    await connectToDatabase();
    const categories = await TreatmentCategory.find();
    return NextResponse.json(
      { success: true, data: categories },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET Error:", error); // Log the error for debugging
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const { name } = await req.json();
    const category = await TreatmentCategory.create({ name });
    return NextResponse.json(
      { success: true, data: category },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST Error:", error); // Log the error for debugging
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
