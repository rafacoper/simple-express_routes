const express = require("express")
const mongoose = require("mongoose")
const requireAuth = require("../middlewares/requireAuth")

const Car = mongoose.model("Car")

const router = express.Router()

router.use(requireAuth)

router.get("/car", async (req, res) => {
  const userId = req.user._id
  const car = await Car.find(userId)
  if (!car) {
    return res.send([])
  }
  res.send(car)
})

router.post("/car", async (req, res) => {
  const { plate, brand, model } = req.body
  const user = req.user

  if (!plate || !brand || !model) {
    return res
      .status(422)
      .send({ error: "You must provide the car's plate, brand and model" })
  }
  try {
    const car = new Car({
      userId: user._id,
      plate,
      brand,
      model,
    })
    await car.save()
    res.send(car)
  } catch (err) {
    res.status(422).send({ error: err.message })
  }
})

module.exports = router
