
var http = require("http");
// var fs = require('fs');


var port = 3000;

var ip = "127.0.0.1";

var requestListener = require('./request-handler.js');

var server = http.createServer(requestListener.requestHandler);
console.log("Listening on http://" + ip + ":" + port);
server.listen(port, ip);

// To start this server, run:
//
//   node basic-server.js
//
// on the command line.
//
// To connect to the server, load http://127.0.0.1:3000 in your web
// browser.
//
// server.listen() will continue running as long as there is the
// possibility of serving more requests. To stop your server, hit
// Ctrl-C on the command line.

// fs.readFile('../client/index.html', function(err, html)){
//   if(err) {
//     throw err;
//   }

//   http.createServer(function(){
//     response.writeHeader(200, {"Content-Type": "text/html"});
//     response.write(html);
//     response.end();
//   }).listen(8080);
// }

