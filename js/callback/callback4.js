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
// const addmision = (fname,per,cb)=>{
//     let x = cb({fname:fname,per:per})
//     // console.log(x)

//     return x;
// }

// const addmision = (fname,per,cb)=>{
//     return  cb({fname:fname,per:per})
//     // console.log(x)

// }

const addmision = (fname,per,cb)=> cb({fname:fname,per:per})
    // console.log(x)



let percentage = 52;
let ans;

if(percentage > 90){
    ans = addmision("parva",percentage,science)
}
else if(percentage > 70){
    ans = addmision("parva",percentage,commerce)
}
else if(percentage > 50){
    ans = addmision("parva",percentage,arts)
}
else{
    console.log("sorry per is not enough")
}

console.log(ans);
