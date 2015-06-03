var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  "Content-Type": "application/json"
};

// Stores message data
var results = [];

// Acceptable URLs
var url = [
  '/classes/messages',
  '/classes/room1'
];

// Handles response data
var sendResponse = function(response, statusCode){
  var statusCode = statusCode || 200;
  response.writeHead(statusCode, headers);
  response.end(JSON.stringify( {results: results} ));
};

var requestHandler = function(request, response) {
  console.log("Serving request type " + request.method + " for url " + request.url);

  // The outgoing status.
  var statusCode;

  var body = '';

  if (request.method === 'POST'){
    request.on('data', function(chunk){
      body += chunk;
    });
    request.on('end', function(){
      results.push(JSON.parse(body));
      sendResponse(response, 201);
    });
  } else if (request.method === 'GET' && url.indexOf(request.url) === -1){
    sendResponse(response, 404);
  } else if (request.method === 'GET'){
    sendResponse(response, 200);
  } else if (request.method === 'OPTIONS'){
    // statusCode = 200;
    // response.writeHead(statusCode, headers);
    // response.end(null);
    sendResponse(response, 200);
  }

};

exports.requestHandler = requestHandler;

