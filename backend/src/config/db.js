import mongoose from "mongoose";

const ConnectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDb connect succesfully");
  } catch (error) {
    console.log("Error during connection DB", error); 
    process.exit(1);
  }
};

export default ConnectDb;
