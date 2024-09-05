import app from "./app.mjs";
import { configDotenv } from "dotenv";
import mongoose from "mongoose";
configDotenv({ path: "./.env" });

const DB = process.env.DATABASE_URL.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => {
  console.log("Connected to database");
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port http://localhost:${process.env.PORT}`);
});
