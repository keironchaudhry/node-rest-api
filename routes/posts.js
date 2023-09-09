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
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({
        $set: req.body,
      });
      res.status(200).json("Post updated.");
    } else {
      res.status(403).json("You can only update your own posts.");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a post
// Like a post
// View a post
// View timeline posts

module.exports = router;
