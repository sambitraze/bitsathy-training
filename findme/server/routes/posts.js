import express from "express";
import { getAllPost, createPost } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getAllPost);
router.post("/", createPost);

export default router;