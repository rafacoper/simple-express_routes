const express = require("express")
const mongoose = require("mongoose")
const User = mongoose.model('User')

const router = express.Router()

router.post("/signup", async (req, res) => {
  const { email, password } = req.body

  const user = new User({email, password}) // new instance
  await user.save()

  res.send("Made a request")
})

module.exports = router
