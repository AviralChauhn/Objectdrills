const data = {flavor: "chocolate"}
const defaults = require("../defaults")
const icecream=defaults(data,{flavor:"vanilla",sprinkles:"lots"})
console.log(icecream)
