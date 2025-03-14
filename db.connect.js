import mongoose from "mongoose";

const dbName = "movie-management";
const dbUserName = "nishrit";
const dbPassword = encodeURIComponent("Nishrit5");
const dbOptions = "retryWrites=true&w=majority&appName=School";
const dbHosts = "school.t7rsx.mongodb.net";

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
