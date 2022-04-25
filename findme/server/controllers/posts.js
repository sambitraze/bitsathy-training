import Post from "../models/posts.js";

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