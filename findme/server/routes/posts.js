import express from "express";
import { getPosts, createPost, updatePost, deletePost, likePost, getPost } from "../controllers/posts.js";

const router = express.Router();
import auth from "../middleware/auth.js";

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch('/:id/likePost', likePost);

export default router;