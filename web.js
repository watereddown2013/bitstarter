
var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    response.send(hw);
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var rfc = fs.readFileSync("index.html");
var buffer = new Buffer(rfc, "utf-8");
var hw = buffer.toString();
