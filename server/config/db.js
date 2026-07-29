import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(process.env.MONGO_URI)
    console.log("DataBase Connected ✅");
  } catch (error) {
    console.log("DataBase not Connected ❌");
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
