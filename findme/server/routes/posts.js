import express from "express";
import { getAllPost, createPost, updatePost, deletePost, likePost , getPost } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getAllPost);
router.get("/:id", getPost);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch('/:id/likePost', likePost);

export default router;