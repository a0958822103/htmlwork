const http = require('http')
const bl = require('bl')
let results = []
let count = 0 

function result(){
    for(let i=0; i<3;i++){
        console.log(results[i]);
    }
}
function httpget(num){
    http.get(process.argv[2+num],function(response){
    response.setEncoding('utf-8');
    response.pipe(bl(function (err, data){
        if(err){console.log(err)} 
        results[num]= data.toString();
        count++;

        if(count==3)
            result();
    }))
  }) 
}
for(let i=0;i<3;i++)
    httpget(i);
