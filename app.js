const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log("A request has been made HYPE");
  res.send('Hello World from inside a docker container app!')
})

app.listen(port, () => {
  console.log(`Dummy app listening on port: ${port}`)
})
