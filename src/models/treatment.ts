// models/Treatment.ts
import mongoose, { Schema, Document, Types, Model } from "mongoose";

export interface ITreatment extends Document {
  name: string;
  description?: string;
  price?: number;
  handle: string;
  category: Types.ObjectId; // Reference to Category document
}

const treatmentSchema = new Schema<ITreatment>({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number },
  handle: { type: String, unique: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "TreatmentCategory", required: true },
});

// Pre-save middleware to generate the handle from the treatment name
treatmentSchema.pre("save", function (next) {
  this.handle = this.name.toLowerCase().replace(/\s+/g, "-");
  next();
});

const Treatment: Model<ITreatment> =
  mongoose.models.Treatment || mongoose.model<ITreatment>("Treatment", treatmentSchema);

export default Treatment;
