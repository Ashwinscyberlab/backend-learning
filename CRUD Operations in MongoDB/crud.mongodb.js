// CRUD Operation
use("CrudDb2")


// Create Operation
db.createCollection("courses")

db.courses.insertOne({
  name: "Harrys web dev free course",
  price: 0,
  assignments: 12,
  projects: 45
})

db.courses.insertMany([
  {
    "name": "Python Masterclass",
    "price": 0,
    "assignments": 10,
    "projects": 30
  },
  {
    "name": "JavaScript Basics",
    "price": 0,
    "assignments": 8,
    "projects": 20
  },
  {
    "name": "C# for Beginners",
    "price": 0,
    "assignments": 15,
    "projects": 40
  },
  {
    "name": "Web Development Fundamentals",
    "price": 0,
    "assignments": 12,
    "projects": 35
  },
  {
    "name": "Java Programming Essentials",
    "price": 0,
    "assignments": 14,
    "projects": 38
  },
  {
    "name": "ReactJS Crash Course",
    "price": 0,
    "assignments": 10,
    "projects": 25
  },
  {
    "name": "SQL Simplified",
    "price": 0,
    "assignments": 12,
    "projects": 30
  },
  {
    "name": "Responsive Web Design",
    "price": 0,
    "assignments": 10,
    "projects": 28
  },
  {
    "name": "Node.js for Beginners",
    "price": 0,
    "assignments": 13,
    "projects": 36
  },
  {
    "name": "Frontend Development with Vue.js",
    "price": 0,
    "assignments": 11,
    "projects": 32
  }
]
)

//   let a = db.courses.find({price: 0}) 

//  console.log(a.toArray())

//  let b = db.courses.findOne({price: 0}) 

//  console.log(b)

//  db.courses.updateOne({price: 0}, {$set:{price: 100}})

// db.courses.updateMany({price: 0}, {$set:{price: 1000}})

// db.courses.deleteOne({price: 1000})

// db.courses.deleteMany({price: 1000})

// https://www.mongodb.com/docs/manual/reference/operator/query/



// The $eq operator has the following form:

// { <field>: { $eq: <value> } }


// db.inventory.insertMany( [
//    { _id: 1, item: { name: "ab", code: "123" }, qty: 15, tags: [ "A", "B", "C" ] },
//    { _id: 2, item: { name: "cd", code: "123" }, qty: 20, tags: [ "B" ] },
//    { _id: 3, item: { name: "ij", code: "456" }, qty: 25, tags: [ "A", "B" ] },
//    { _id: 4, item: { name: "xy", code: "456" }, qty: 30, tags: [ "B", "A" ] },
//    { _id: 5, item: { name: "mn", code: "000" }, qty: 20, tags: [ [ "A", "B" ], "C" ] }
// ] )

// The $gt operator has this form:
// db.inventory.insertMany( [
//    {
//       item: "nuts", quantity: 30,
//       carrier: { name: "Shipit", fee: 3 }
//    },
//    {
//       item: "bolts", quantity: 50,
//       carrier: { name: "Shipit", fee: 4 }
//    },
//    {
//       item: "washers", quantity: 10,
//       carrier: { name: "Shipit", fee: 1 }
//    }
// ] )


// $gte
// $gte selects documents where the value of the specified field is greater than or equal(>=) to the specified value.

// db.inventory.insertMany( [
//    {
//       item: "nuts", quantity: 30,
//       carrier: { name: "Shipit", fee: 3 }
//    },
//    {
//       item: "bolts", quantity: 50,
//       carrier: { name: "Shipit", fee: 4 }
//    },
//    {
//       item: "washers", quantity: 10,
//       carrier: { name: "Shipit", fee: 1 }
//    }
// ] )

// db.inventory.find( { quantity: { $gte: 20 } } )


// Syntax
// The $in operator has the following form:

// { field: { $in: [ <value1>, <value2>, ... <valueN> ] } }

db.inventory.insertMany( [
   { item: "Pens", quantity: 350, tags: [ "school", "office" ] },
   { item: "Erasers", quantity: 15, tags: [ "school", "home" ] },
   { item: "Maps", tags: [ "office", "storage" ] },
   { item: "Books", quantity: 5, tags: [ "school", "storage", "home" ] }
] )

// db.inventory.find( { quantity: { $in: [ 5, 15 ] } }, { _id: 0 } )

// db.inventory.updateMany(
//    { tags: { $in: [ "home", "school" ] } },
//    { $set: { exclude: false } }
// )



// Definition
// $lt
// Syntax: { field: { $lt: value } }

// $lt selects the documents where the value of the field is less than (i.e. <) the specified value.

// db.inventory.insertMany( [
//    {
//       item: "nuts", quantity: 30,
//       carrier: { name: "Shipit", fee: 3 }
//    },
//    {
//       item: "bolts", quantity: 50,
//       carrier: { name: "Shipit", fee: 4 }
//    },
//    {
//       item: "washers", quantity: 10,
//       carrier: { name: "Shipit", fee: 1 }
//    }
// ] )

// db.inventory.find( { quantity: { $lt: 20 } } )

// $lte
// Syntax: { field: { $lte: value } }

// $lte selects the documents where the value of the field is less than or equal to (i.e. <=) the specified value.

// db.inventory.find( { quantity: { $lte: 20 } } )


// Syntax
// The $ne operator has the following form:

// { field: { $ne: value } }

// db.inventory.find( { quantity: { $ne: 20 } } )


// Syntax
// The $nin operator has the following form:

// { field: { $nin: [ <value1>, <value2> ... <valueN> ] } }

// db.inventory.find( { quantity: { $nin: [ 5, 15 ] } }, { _id: 0 } )


