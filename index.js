const express = require('express')
const app = express()
const port = process.env.PORT || 80

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/users', (req, res) => {
    res.send('Hello users!')
})

app.get('/posts', (reg, res) => {
    res.send({
      count: 55,
      name: 'post'
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})