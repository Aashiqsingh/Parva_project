const science = (option)=>{
    return option.fname + " ur addmision is confirm in science with per " + option.per
}

const commerce = (option)=>{
    return option.fname + " ur addmision is confirm in commerce with per " + option.per
}

const arts = (option)=>{
    return option.fname + " ur addmision is confirm in arts with per " + option.per
}


// cb -- callback 
const addmision = (fname,per,cb)=>{
    let x = cb({fname:fname,per:per})
    console.log(x)
}

let percentage = 72;

if(percentage > 90){
    addmision("parva",percentage,science)
}
else if(percentage > 70){
    addmision("parva",percentage,commerce)
}
else if(percentage > 50){
    addmision("parva",percentage,arts)
}
else{
    console.log("sorry per is not enough")
}