//### BUILT IN ###
//To include a module, use the require() function with the name of the module:
var http = require('http');

//Now your application has access to the HTTP module, and is able to create a server:
//http.createServer(function (req, res) {
//    res.writeHead(200, {'Content-Type': 'text/html'});
//    res.end('Using a built-in module');
//}).listen(8080);



//### CUSTOM ###
var customModule = require('./node-01-modules-custom');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + customModule.customDateTime());
    res.end();
}).listen(8080);
