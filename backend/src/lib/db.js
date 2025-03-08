import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://root:hrg42dp5@cloud.sealos.io:32171/?directConnection=true";
export const PORT = process.env.PORT || 5001;

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // 如果数据库连接失败，终止应用程序
  }
};
