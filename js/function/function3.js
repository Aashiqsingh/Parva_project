function science(option){
    return option.fname + " ur admision confirm in science with per " + option.per
}

function commerce(option){
    return option.fname + " ur admision confirm in commerce with per " + option.per
}

function arts(option){
    return option.fname + " ur admision confirm in arts with per " + option.per
}

let percentage = 52;
let ans;


if(percentage > 90){
    ans = science({fname:"parva",per:percentage})
}
else if(percentage > 70){
    ans = commerce({
        fname:"parva",
        per:percentage
    })
}
else if(percentage > 50){
    // ans = arts({
    //     fname:"parva",
    //     per:percentage
    // })

    console.log(arts({
        fname:"parva",
        per:percentage
    }));
    
}
else{
    console.log("percentage is less than 50")
}

console.log(ans);
