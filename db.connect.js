import mongoose from "mongoose";

const dbName = "";
const dbUserName = "";
const dbPassword = "";
const dbOptions = "";
const dbHosts = "";

export const connectDB = async () => {
  try {
    const URL = `mongodb+srv://${dbUserName}:${dbPassword}@${dbHosts}/${dbName}?${dbOptions}`;
    await mongoose.connect(URL);

    console.log("DB connection successful");
  } catch (error) {
    console.log("DB connection failed");
    console.log(error.message);

    process.exit(1);
  }
};
