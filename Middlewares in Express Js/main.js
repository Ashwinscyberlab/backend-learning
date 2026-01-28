const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const fs   = require("fs")
//app.use(express.static("public"))

app.use('/blog', blog)

// Midleware 1 -
app.use((req,res,next) =>{
 fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
 req.harry = "I am harry bhai";
  console.log(`${Date.now()} is a ${req.method}`)
  next()

  
})


// Midleware 2 -
app.use((req,res,next) =>{
   req.harry = "I am harry bhai";
  console.log('m2')
  next()

})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/ about', (req, res) => {
  res.send('Hello about!')
})


app.get('/contact', (req, res) => {
  res.send('Hello contact!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
