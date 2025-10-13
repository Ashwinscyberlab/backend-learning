import path from "path";

let mypath = "D:\\Working with Files fs and path Modules_Nodejs\\Ashwin.txt";

console.log("Extension:", path.extname(mypath));
console.log("Directory name:", path.dirname(mypath));
console.log("Base name:", path.basename(mypath));
console.log("Joined path:", path.join("C:", "programmer", "Ashwin.txt"));
