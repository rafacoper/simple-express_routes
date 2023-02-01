const mongoose = require('mongoose')

// const pointSchema = new mongoose.Schema({
//   timestamp: Number,
//   coords: {
//     altitude: Number,
//     latitude: Number,
//     longitude: Number,
//     accuracy: Number,
//     heading: Number,
//     speed: Number,
//   }
// })

const trackSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    require: true
  },
  locations: [
    {
      timestamp: Number,
      coords: {
        altitude: Number,
        latitude: Number,
        longitude: Number,
        accuracy: Number,
        heading: Number,
        speed: Number,
      }
    }
  ]
})

mongoose.model("Track", trackSchema)