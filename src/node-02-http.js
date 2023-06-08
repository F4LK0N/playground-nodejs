var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    //HTTP HEADER
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    //BODY CONTENT
    //Raw 
    res.write('HTTP Module!<br>');
    //Query String
    res.write(req.url+'<br>');
    //Query Params
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.write(txt+'<br>');
    
    //END REQUISITION
    res.end();
}).listen(8080);

//node node-02-http.js
//http://127.0.0.1:8080/?year=2023&month=November
