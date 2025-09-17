const singapore = (option)=>{
    console.log(option.fname + " ur tour is confirm in singapore with package " + option.amount);   
}

const lasvegas = (option)=>{
    console.log(option.fname + " ur tour is confirm in lasvegas with package " + option.amount);   

}

const newyork = (option)=>{
    console.log(option.fname + " ur tour is confirm in newyork with package " + option.amount);   
}

const budget = 3000;
let ans;

if(budget > 3500){
    singapore({
        fname:"parva",
        amount:budget
    })
}
else if(budget > 2500){
    lasvegas({fname:"parva",amount:budget})
}
else if(budget > 1500){
    newyork({fname:"parva",amount:budget})
}
else{
    console.log("sorry budget is not enough")
}