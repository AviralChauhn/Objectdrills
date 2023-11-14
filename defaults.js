function defaults(obj,defaultsProps){
   for(let keys in defaultsProps){
    if(defaultsProps.hasOwnProperty(keys) && obj[keys]=== undefined){
        obj[keys]=defaultsProps[keys]
    }
   }
   return obj
}
module.exports = defaults