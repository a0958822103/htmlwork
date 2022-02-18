const fs = require('fs')
const p = require('path')
fs.readdir(process.argv[2], function(err, list){
   if(err){console.error(err)} 
   else{
       for(let i=0;i<=list.length-1;i++){
           if(p.extname(list[i])=== '.' + process.argv[3]){
               console.log(list[i]);
           }
       }
   }
    

})