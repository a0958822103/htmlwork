let reduce = document.getElementById("btn1");
let add = document.getElementById("btn3");
let zero = document.getElementById("btn2");
let integer = document.getElementById("num");
let value = 0;  

reduce.addEventListener('click',function (){
    value -= 1 ;
    integer.innerHTML = value;
    if(value < 0){
        integer.style.color = "red";
       }
       else if (value > 0){
           integer.style.color = "green";
       }
       else{
           integer.style.color = "black";
       }
})
add.addEventListener('click',function(){
    value += 1 ;
    integer.innerHTML = value;
    if(value < 0){
        integer.style.color = "red";
       }
       else if (value > 0){
           integer.style.color = "green";
       }
       else{
           integer.style.color = "black";
       }
})
zero.addEventListener('click',function(){
    value = 0 ;
    integer.innerHTML = value;
    integer.style.color = "black";
})
