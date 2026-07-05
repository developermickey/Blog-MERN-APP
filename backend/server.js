import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./config/db.js";
const app = express();

app.use(express.json());

import userRoutes from "./routes/userRoutes.js";

const PORT = process.env.PORT || 5001;

app.get("/health", (req, res) => {
  res.send("Hello World Dev");
});

app.use("/api/users", userRoutes);

connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
