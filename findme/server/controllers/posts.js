import Post from "../models/posts.js";

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