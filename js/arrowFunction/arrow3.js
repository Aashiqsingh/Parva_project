const singapore = (option)=>{
    return option.fname + " ur tour is confirm in singapore with package " + option.amount
}

const lasvegas = (option)=>{
    return option.fname + " ur tour is confirm in lasvegas with package " + option.amount  

}

const newyork = (option)=>{
    return option.fname + " ur tour is confirm in newyork with package " + option.amount 
}

const budget = 2000;

if(budget > 3500){
    ans = singapore({
        fname:"parva",
        amount:budget
    })
}
else if(budget > 2500){
    ans = lasvegas({fname:"parva",amount:budget})
}
else if(budget > 1500){
    ans = newyork({fname:"parva",amount:budget})
}
else{
    console.log("sorry budget is not enough")
}

console.log(ans);