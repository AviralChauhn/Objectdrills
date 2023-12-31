function mapObject(obj, cb) {
    // Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
    // http://underscorejs.org/#mapObject
    let keysval ={}
    for(let keys in obj){
      keysval[keys]=cb(obj[keys])
    }
    return keysval
}
module.exports=mapObject