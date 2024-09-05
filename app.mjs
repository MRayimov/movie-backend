import express from "express";
import cartoonRoutes from "./routes/cartoonRoutes.mjs";
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});

app.use("/cartoons", cartoonRoutes);

export default app;
