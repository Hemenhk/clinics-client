// app/api/categories/[categoryHandle]/route.ts
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/dbConnect";
import TreatmentCategory from "@/models/categories";
import Treatment from "@/models/treatment";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ categoryHandle: string }> }
) {
  const  categoryHandle  = (await params).categoryHandle; 

  // Connect to the database
  await connectToDatabase();
  try {

    // Find the TreatmentCategory by handle and populate treatments if needed
    const category = await TreatmentCategory.findOne({
      handle: categoryHandle,
    }).populate({
      path: "treatments",
      select: "_id name handle description", // select the fields you want
      model: Treatment
    });

    if (!category) {
      return NextResponse.json(
        { error: "Category not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(category); // Return the category
  } catch (error) {
    console.error("Error fetching category by handle:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching the category" },
      { status: 500 }
    );
  }
}
