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
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json("Post deleted.");
    } else {
      res.status(403).json("You can only delete your own posts.");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Like + dislike a post
router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json("You liked this post.");
    } else {
      post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json("You unliked this post.");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// View a post
// View timeline posts

module.exports = router;
