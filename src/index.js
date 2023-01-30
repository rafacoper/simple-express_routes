require("dotenv").config();
require('./models/User')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/authRoutes')
const requireAuth = require('./middlewares/requireAuth')
const app = express();

app.use(bodyParser.json())
app.use(authRoutes)

const mongoUri = process.env.MONGO_BASE_URL
mongoose.connect(mongoUri)
mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance');
})
mongoose.connection.on('error', (err) => {
  console.error('Error connecting mongo', err);
})


app.get('/', requireAuth, (req, res) => {
  res.send('Lets roll')
})

app.listen(3000, () => {
  console.log('Listennig on port 3000')
})