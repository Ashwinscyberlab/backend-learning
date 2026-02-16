const express = require('express')
const app = express()
const port = 3000
import ejs from 'ejs';


app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  let sitename = "Adidas"
  let siteTitle = "This is the site title"
  let people = ['geddy', 'neil', 'alex'];
let html = ejs.render('<%= people.join(", "); %>', {people: people});
  res.render("index",{sitename:sitename,siteTitle:siteTitle,people,html})
})


app.get('/blog/:slug', (req, res) => {
  let blogname = "Adidas about content"
  let blogTitle = "This is the site title"
  res.render("index",{blogname: blogname,blogTitle:blogTitles})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
