import express from "express";
import { connectDB } from "./db.connect.js";
import { deleteOperations } from "./db.operations/delete.operation.js";
import { readOperationAggregation } from "./db.operations/read.operation.aggregation.js";
import { readOperations } from "./db.operations/read.operations.js";
import { updateOperations } from "./db.operations/update.operations.js";
import { writeOperations } from "./db.operations/write.operations.js";

const app = express();

app.use(express.json());

await connectDB();

app.use(deleteOperations);
app.use(readOperationAggregation);
app.use(readOperations);
app.use(updateOperations);
app.use(writeOperations);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
