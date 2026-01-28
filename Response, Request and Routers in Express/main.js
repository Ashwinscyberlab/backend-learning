const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')
 



const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog', blog)
app.use('/shop', shop)

app.get('/', (req, res) => {
  console.log("Hey its a get request")
  res.send('Hello World tere jhopda jane wala hai yes I am very happy')
})


app.post('/', (req, res) => {
  console.log("Hey its a post request")
  res.send('Hello World steel bhai jhan')
})

app.put('/', (req, res) => {
  console.log("Hey its a put request")
  res.send('Hello World')
})


app.get("/index",(req,res) =>{
  console.log("Hey its get request")
  res.sendFile('templates/index.html',{root:__dirname})
})

app.get("/api",(req,res) =>{
  res.json({a:1,b:2,c:3,d:4,name:["sayan","giorgia meloni"]})
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
