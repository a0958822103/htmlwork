function hex(){

    const colors=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let hex="#";
    let x=document.getElementById("btn");
    
    for(let i=1;i<7;i++)
    {
        let y=Math.floor(Math.random()*15);
        hex+=colors[y];
    }
     
        
   
  
    document.body.style.backgroundColor=hex;
    document.getElementById("color").innerHTML=hex;
}