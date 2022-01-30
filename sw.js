function color(){
const colors=["green", "red", "rgba(133,122,200)", "#f15025"];  
let y=Math.floor(Math.random()*4)
let x =document.getElementById("btn");
if(x=true){
document.body.style.backgroundColor=colors[y];
document.getElementById("color").innerHTML=colors[y];
}
}
