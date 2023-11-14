function pairs(obj){
    let pair=[]
    for(let keys in obj){
        pair.push([keys,obj[keys]])
    }
    return pair;
}
module.exports = pairs