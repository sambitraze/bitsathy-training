import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import postRoute from "./routes/posts.js";
import userRouter from "./routes/user.js";

const app = express();

app.use(cors());
app.use(express.json());

const DBURL = "mongodb+srv://sambitraze:findme123@findme.ltkft.mongodb.net/findme?retryWrites=true&w=majority"

mongoose.connect(DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to DB");
}).catch(err => {
    console.log(err);
})


app.use("/posts", postRoute);
app.use("/user", userRouter);

app.get("/", (req, res) => {
    res.send("Hello World!");
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("Server started on port " + port);
})
