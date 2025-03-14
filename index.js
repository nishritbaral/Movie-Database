import express from "express";
import { connectDB } from "./db.connect.js";

const app = express();

app.use(express.json());

await connectDB;

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
