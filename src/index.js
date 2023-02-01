require("dotenv").config()
require("./models/User")
require("./models/Track")
require("./models/Car")

const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const authRoutes = require("./routes/authRoutes")
const trackRoutes = require("./routes/trackRoutes")
const requireAuth = require("./middlewares/requireAuth")
const carRoutes = require("./routes/carRoute")

const app = express()

app.use(bodyParser.json())
app.use(authRoutes)
app.use(trackRoutes)
app.use(carRoutes)

const mongoUri = process.env.MONGO_BASE_URL

mongoose.set("strictQuery", false)
mongoose.connect(mongoUri)
mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance")
})
mongoose.connection.on("error", (err) => {
  console.error("Error connecting mongo", err)
})

app.get("/", requireAuth, (req, res) => {
  res.send("Lets roll")
})

app.listen(3000, () => {
  console.log("Listennig on port 3000")
})
