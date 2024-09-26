import mongoose from "mongoose";
export const Connectmongodb = async () => {
  try {
    if (mongoose.connection.readyState >= 1) return;
    await mongoose.connect(process.env.NEXT_APP_MONGODB_URI || "");
  } catch (error) {
    console.log(error);
  }
};
