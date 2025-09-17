function demo(){
    console.log("hello world..");
}


function test(x){
    // console.log(x);
    x()
}


// test(12)
// test("parva")
// test(true)


test(demo)