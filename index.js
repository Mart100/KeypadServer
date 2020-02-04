const express = require('express')
const bodyParser = require('body-parser')
const cors =  require('cors')

const app = express()
let port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.listen(process.env.PORT || port, () => {
  console.log('Server listening on port ', process.env.PORT || port)
})

app.get('/keypress', async (req, res, next) => {
  let key = req.query.key
  console.log('yeet')
  res.send('OK')
})