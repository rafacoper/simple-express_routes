const mongoose = require("mongoose")

const pointSchema = new mongoose.Schema({
  timestamp: Number,
  coords: {
    latitude: Number,
    longitude: Number,
    altitude: Number,
    accuracy: Number,
    heading: Number,
    speed: Number,
  },
})

const trackSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    default: "",
  },
  locations: [pointSchema],
})

// const mock = {   
//   "name": "First One",
//   "locations": {
//       "timestamp": 1000,
//       "coords": {
//           "latitude": 100,
//           "longitude": 100,
//           "altitude": 100,
//           "accuracy": 100,
//           "heading": 100,
//           "speed": 100,
//       }
//   }
// }

mongoose.model("Track", trackSchema)
