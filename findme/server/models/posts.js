import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    name: String,
    creator: String,
    tags: [String],
    likes: { type: [String], default: [] },    
    selectedFile: String,
}, {
    timestamps: true
});

const Post = mongoose.model("Posts", postSchema);

export default Post;