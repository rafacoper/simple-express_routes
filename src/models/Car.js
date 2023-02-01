const mongoose = require("mongoose")

const carSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  plate: {
    type: String,
    unique: true,
    require: true,
  },
  brand: { type: String },
  model: { type: String },
})

mongoose.model("Car", carSchema)
