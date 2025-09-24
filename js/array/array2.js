var users = ["parva","solanki","khyatis","meet","dhaval","rahul"]


// for(let i=0;i<users.length;i++){
//     console.log(users[i]);
// }

// forEach  : void  || forEach is equvilant to for loop

// user === users[i]

// users.forEach((user)=>{
//     console.log(user);
// })

users.forEach((user)=>{
    // console.log(user.toUpperCase());
    if(user.length > 5){
        console.log(user.toUpperCase());
    }
})