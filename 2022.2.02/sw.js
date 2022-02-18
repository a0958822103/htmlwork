function color()
{
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];  
let x = document.getElementById("btn");
let y= Math.floor(Math.random()*4)
if(x = true){
document.body.style.backgroundColor = colors[y];
document.getElementById("color").innerHTML = colors[y];
            }
}
