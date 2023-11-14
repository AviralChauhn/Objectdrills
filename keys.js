function keys(obj) {
    // Retrieve all the names of the object's properties.
    // Return the keys as strings in an array.
    // Based on http://underscorejs.org/#keys
    let keyval=[]
    for( let keysval in obj){
        keyval.push(keysval)
    }
    console.log(keyval);
}
module.exports=keys