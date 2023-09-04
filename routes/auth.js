const router = require("express").Router();
const User = require("../models/User");

// register users
router.get("/register", async (req, res) => {
  const user = await new User({
    username: "Jahan C",
    email: "jahanc@email.com",
    password: "12345",
  });

  await user.save();
  res.send("Uploaded.")
});

module.exports = router;
