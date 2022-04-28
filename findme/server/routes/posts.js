import express from "express";
import { getAllPost, createPost, updatePost } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getAllPost);
router.post("/", createPost);
router.put("/:id", updatePost);

export default router;