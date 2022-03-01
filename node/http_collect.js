const http = require('http')
const bl = require('bl')

http.get(process.argv[2],function(response){
    response.setEncoding('utf-8');
    response.pipe(bl(function (err, data){
        if(err){console.log(err)} 
        console.log(data.length);
        data = data.toString();
        console.log(data);

    }))
    
}) 