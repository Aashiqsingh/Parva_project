function science(option){
    console.log(option.fname + " ur admision confirm in science with per " + option.per);
}

function commerce(option){
    console.log(option.fname + " ur admision confirm in commerce with per " + option.per);
}

function arts(option){
    console.log(option.fname + " ur admision confirm in arts with per " + option.per);
}

let percentage = 72;
if(percentage > 90){
    science({fname:"parva",per:percentage})
}
else if(percentage > 70){
    commerce({
        fname:"parva",
        per:percentage
    })
}
else if(percentage > 50){
    arts({
        fname:"parva",
        per:percentage
    })
}
else{
    console.log("percentage is less than 50")
}