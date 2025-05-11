const express = require('express')
const packageName = require('packageName');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('My phones information coming soon')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
