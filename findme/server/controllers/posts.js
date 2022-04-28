import Post from "../models/posts.js";
import mongoose from "mongoose";

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const post = await Post.findById(id);

    const updatedPost = await Post.findByIdAndUpdate(id, { likesCount: post.likesCount + 1 }, { new: true });

    res.json(updatedPost);
}

export const getPost = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await Post.findById(id);

        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Post.findByIdAndRemove(id);

    res.status(200).send(`Post with id: ${id} deleted`);
}

export const updatePost = async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).send("Post not found");

    const updatedPost = await Post.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
    );
    res.send(updatedPost);
}

export const getAllPost = (req, res) => {
    try {
        Post.find({}, (err, posts) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(posts);
            }
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

export const createPost = (req, res) => {
    try {
        const post = new Post(req.body);
        post.save((err, post) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(post);
            }
        });
    } catch (error) {
        res.status(500).send(error);
    }
}