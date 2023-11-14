const objects =require("../data")
const mapObjects = require("../mapobject")

const increased= mapObjects(objects,(object)=>object*3)
console.log(increased)