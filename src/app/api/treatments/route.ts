// app/api/categories/route.ts
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/dbConnect";
import Treatment from "@/models/treatment";
import TreatmentCategory from "@/models/categories";

export async function GET() {
  try {
    await connectToDatabase();
    const treatments = await Treatment.find().populate({
      path: "category",
      select: "name _id handle"
    });
    return NextResponse.json(
      { success: true, data: treatments },
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

export async function POST(request: Request) {
  await connectToDatabase();

  try {
    // Parse the request body to get treatment data
    const { name, description, price, category } = await request.json();

    // 1. Create the treatment with the specified category
    const treatment = await Treatment.create({
      name,
      description,
      price,
      category, // Associate the treatment with the category ID
    });

    // 2. Update the category to include the new treatment in its treatments array
    await TreatmentCategory.findByIdAndUpdate(category, {
      $push: { treatments: treatment._id },
    });

    // 3. Return the created treatment
    return NextResponse.json(
      { success: true, data: treatment },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
