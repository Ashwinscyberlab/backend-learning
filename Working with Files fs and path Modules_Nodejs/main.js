const { error } = require('console')
const fs =require('fs')

// console.log(fs)

console.log("starting ")
 fs.writeFileSync("Ashwin.txt","Ashwin is learning backend")

 fs.writeFile("Ashwin2.text","Learning a backend enjoyable I am enjoying this journey",()=>{
     console.log("done")
    fs.readFile("Ashwin2.text",(error,Date) =>{
        console.log(error,Date.toString())
    })
 })

 fs.appendFile("Ashwin.text","yah bro",(e,d) =>{
    console.log(d)
 })

console.log("ending")