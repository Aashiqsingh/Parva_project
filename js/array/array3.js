// var users = ["parva","solanki","khyatis","meet","dhaval","rahul"]


// let flag = false;
// for(let i=0;i<users.length;i++){
//     if(users[i].length < 5){
//         flag = true;
//     }
// }

// console.log(flag);

// some : return boolean and also return  || condition 

// let x = users.some((user)=>{
//     return user.length < 5
// })

// console.log(x);

// let x = users.some((user)=>{
//     return user.startsWith("z")
// })

// let x = users.some((user)=> user.startsWith("s"))

// console.log(x);



// Every  : boolean and also return  && condition

var users = ["parva","solanki","khyatis","meeta","dhaval","rahul"]

// let x = users.every((user)=>{
//     return user.length > 4
// })

// console.log(x);


let x = users.every((user)=>{
    return user.startsWith("d")
})

console.log(x);
