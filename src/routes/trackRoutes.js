const express = require("express")
const mongoose = require("mongoose")
const requireAuth = require("../middlewares/requireAuth")

const Track = mongoose.model("Track")

const router = express.Router()

router.use(requireAuth)

router.get("/tracks", async (req, res) => {
  const userId = req.user._id
  const tracks = await Track.find({userId})
  res.send(tracks)
})

router.post("/tracks", async (res, req) => {
  const { name, locations } = req.body
  const userId = req.user._id
  
  console.log('OQ TEM AQUI ::: ', req.body);

  if (!name || !locations) {
    return res
      .status(422)
      .send({ error: "You must provide name and locations" })
  }

  try {
    const track = new Track({ userId, name, locations })
    await track.save()
    res.send(track)
  } catch (err) {
    res.status(422).send({ error: err.message })
  }
})

module.exports = router
