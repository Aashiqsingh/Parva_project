var departments = [
    {
        name:"IT",
        employees:[
            {
                name:"amit",
                age:23,
                gender:"male",
                isActive:true
            },
            {
                name:"sumit",
                age:25,
                gender:"male",
                isActive:true
            },
            {
                name:"seeta",
                age:26,
                gender:"female",
                isActive:true
            }
        ]
    },
    {
        name:"HR",
        employees:[
            
            {
                name:"geeta",
                age:32,
                gender:"female",
                isActive:true
            },
            {
                name:"harita",
                age:36,
                gender:"female",
                isActive:false
            },
        ]
    },
    {
        name:"Finance",
        employees:[
            
            {
                name:"siya",
                age:35,
                gender:"female",
                isActive:true
            },
            {
                name:"axit",
                age:37,
                gender:"male",
                isActive:true
            },
            {
                name:"payal",
                age:39,
                gender:"female",
                isActive:true
            },
            {
                name:"sunit",
                age:42,
                gender:"male",
                isActive:false
            }
            
        ]
    },
]

// departments.forEach((depart)=>{
//     console.log(depart.name);
    
// })

// let ans = departments.map((depart)=>{
//     return depart.employees;
// })

// console.log(ans);


// let ans = departments.map((depart)=>{
//     return depart.employees.filter((emp)=>{
//         return emp.gender == "male"
//     })
// })

// console.log(ans);

// find

// let ans = departments.find((depart)=>{
//     return depart.name == "Finance"
// }).employees.filter((emp)=>{
//     return emp.gender == "female"
// })



// let ans = departments.find((depart)=> depart.name =="Finance").employees.filter((emp)=> emp.gender == "female")

// console.log(ans);


// let ans = departments.find((depart)=> depart.name == "IT").employees.filter((emp)=> emp.age >= 25)
// console.log(ans);

// let ans = departments.map((depart)=> depart.employees.filter((emp)=> emp.name.startsWith("s")))
// console.log(ans);