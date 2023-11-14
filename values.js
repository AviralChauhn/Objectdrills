function values(obj){
    let vals=[]
    for(let keysval in obj){
        vals.push(obj[keysval])
    }
    console.log(vals)
}

module.exports= values;