require('./models/User')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/authRoutes')

const app = express();

app.use(bodyParser.json())
app.use(authRoutes)

const mongoUri = 'mongodb+srv://rfladmin:103224271@cluster0.3vyxnbf.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(mongoUri)
mongoose.connection.on('connectes', () => {
  console.log('Connected to mongo instance');
})
mongoose.connection.on('error', (err) => {
  console.error('Error connecting mongo', err);
})


app.get('/', (req, res) => {
  res.send('Lets roll')
})

app.listen(3000, () => {
  console.log('Listennig on port 3000')
})