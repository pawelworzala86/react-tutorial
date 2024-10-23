const express = require('express')
const app = express()
var cors = require('cors')

app.use(cors())

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)