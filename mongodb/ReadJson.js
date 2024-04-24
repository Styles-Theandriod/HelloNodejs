const http = require('http');
const fs = require('fs')

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'application/json'});
    // reading the json file 
    fs.readFile('app.json', function(err, data){
        if (err){
            throw err
        }else{
            console.log("Operation Success");
        }
    //sending response 
    res.end(data)
})}).listen(3000)