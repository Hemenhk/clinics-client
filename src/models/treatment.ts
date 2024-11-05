import mongoose, { Schema, Document } from "mongoose";

export interface ITreatment extends Document {
  name: string;
  description?: string;
  price?: number;
  handle: string;
}

const treatmentSchema = new Schema<ITreatment>({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number },
  handle: { type: String, unique: true },
});

// Pre-save middleware to generate the handle from the treatment name
treatmentSchema.pre("save", function (next) {
  this.handle = this.name.toLowerCase().replace(/\s+/g, "-");
  next();
});

export default mongoose.models.Treatment ||
  mongoose.model<ITreatment>("Treatment", treatmentSchema);
