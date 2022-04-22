import asyncHandler from "express-async-handler";
import User from "../models/user.js";
import generateToken from "../utils/generateToken.js";

const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({})
    res.json(users)
});

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        const isMatch = await user.matchPassword(password);
        if (isMatch) {
            const token = generateToken(user._id);
            res.json({ token: token, _id: user._id, name: user.name, email: user.email, isAdmin: user.isAdmin })
        } else {
            res.status(401).send("Invalid email or password")
            throw new Error('Invalid password')
        }
    } else {
        res.status(403).send({ message: "User not found" });
        throw new Error('User not found')
    }
});

const getUserProfile = asyncHandler(async (req, res) => {
    res.json(req.user)
})

export {
    getUsers,
    authUser,
    getUserProfile
}