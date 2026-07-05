import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

import userRoutes from "./routes/userRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";

const PORT = process.env.PORT || 5001;

app.get("/health", (req, res) => {
  res.send("Hello World Dev");
});

app.use("/api/users", userRoutes);
app.use("/api/blog", blogRoutes);

connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
