import express from "express";
import { getPosts, createPost, updatePost, deletePost, likePost, getPost } from "../controllers/posts.js";

const router = express.Router();
import auth from "../middleware/auth.js";

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", createPost);
router.put("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch('/:id/likePost', auth, likePost);

export default router;