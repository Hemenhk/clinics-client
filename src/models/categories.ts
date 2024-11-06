// models/TreatmentCategory.ts
import mongoose, { Schema, Document, Types, Model } from "mongoose";

export interface ICategory extends Document {
  name: string;
  handle: string;
  treatments: Types.ObjectId[]; // References to Treatment documents
}

const categorySchema = new Schema<ICategory>({
  name: { type: String, required: true },
  handle: { type: String, unique: true },
  treatments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Treatment" }],
});

// Pre-save middleware to generate the handle from the category name
categorySchema.pre("save", function (next) {
  this.handle = this.name.toLowerCase().replace(/\s+/g, "-");
  next();
});

const TreatmentCategory: Model<ICategory> =
  mongoose.models.TreatmentCategory ||
  mongoose.model<ICategory>("TreatmentCategory", categorySchema);

export default TreatmentCategory;
