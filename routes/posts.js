const router = require("express").Router();

router.get("/", (req, res) => {
  console.log("Posts");
});

module.exports = router;
