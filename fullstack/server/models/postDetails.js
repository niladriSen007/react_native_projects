const mongoose = require("mongoose");

//schema
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "please add post title"],
    },
    description: {
      type: String,
      required: [true, "please add post description"],
    },
    postedBy: {
      type: mongoose.Schema.ObjectId,
      ref: "UserDetail",
      required: true,
    },
  },
  { timestamps: true }
);

export const PostDetails = mongoose.model("PostDetail",postSchema)