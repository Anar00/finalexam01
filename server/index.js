const express = require('express')
const PORT = 3000
const mongoose = require ("mongoose")
const app = express()
 
app.use()
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/products/:id',  (req, res) => {
  res.json({msg: 'success'})
})
app.del('/products/:id', cors(), function (req, res, next) {
  res.json({msg: 'success'})
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})