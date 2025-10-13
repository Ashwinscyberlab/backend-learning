import fs from "fs/promises"

let a = await fs.readFile("Ashwin.text")

let b = await fs.appendFile("Ashwin2.text","you are learning backend")

console.log(a.toString,b)