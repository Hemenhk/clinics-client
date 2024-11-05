import mongoose from "mongoose";

const DB = process.env.MONGODB_URI as string;

export const connectToDatabase = async () => {
  const dbClient = await mongoose.connect(DB);

  return dbClient;
};