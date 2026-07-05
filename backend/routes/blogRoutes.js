import express from "express";
import { createBlog } from "../controllers/blogController.js";
import { isAuthenticated } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", isAuthenticated, createBlog);

export default router;
