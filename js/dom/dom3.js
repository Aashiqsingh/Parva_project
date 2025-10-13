
let colors = ["red","blue","green","yellow","purple","orange","black","gray"]

const changeColor = ()=>{
    let mydiv = document.getElementById("mydiv")

    let randomColor = Math.floor(Math.random() * colors.length)
    console.log(randomColor);
    mydiv.style.backgroundColor = colors[randomColor]
    
}