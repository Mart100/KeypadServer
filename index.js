const express = require('express')
const cors =  require('cors')

const app = express()
let port = 3050

app.use(cors())

app.listen(process.env.PORT || port, () => {
  console.log('Server listening on port ', process.env.PORT || port)
})

app.get('/keypress', async (req, res, next) => {
  let key = req.query.key
  console.log('yeetkey: '+key)
  res.send('OK')
})