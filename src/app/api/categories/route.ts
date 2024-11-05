import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/dbConnect";
import TreatmentCategory from "@/models/categories";

export async function GET() {
  await connectToDatabase();

  try {
    const categories = await TreatmentCategory.find();
    return NextResponse.json(
      { success: true, data: categories },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 400 }
    );
  }
}

export async function POST(req: Request) {
  await connectToDatabase();

  try {
    const { name } = await req.json();

    const category = await TreatmentCategory.create({
      name,
    //   treatments: treatmentIds,
    });

    return NextResponse.json(
      { success: true, data: category },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 400 }
    );
  }
}
