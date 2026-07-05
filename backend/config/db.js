import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conc = await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Database not connected", error.message);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default connectDB;
