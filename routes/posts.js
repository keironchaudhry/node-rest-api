const router = require("express").Router();
const Post = require("../models/Post");

// Create a post

router.post("/create", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Edit a post
// Delete a post
// Like a post
// View a post
// View timeline posts

module.exports = router;
