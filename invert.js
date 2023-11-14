function invert(objects){
    let inverted={}
    for(let keys in objects){
        inverted[objects[keys]]=keys
        // inverted[keys[]]=keys
    }
    return inverted
}
module.exports = invert