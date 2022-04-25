import express from "express";
import { getAllPost } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getAllPost);

export default router;