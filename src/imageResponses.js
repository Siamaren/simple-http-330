"use strict";

var fs = require('fs'); //pull in file system module

var spongegar = fs.readFileSync(__dirname + "/../client/spongegar.png");

var getSpongegar = function(request, response){
    response.writeHead(200, {'Content-Type': 'image/png'});
    response.write(spongegar);
    response.end();
}

module.exports.getSpongegar = getSpongegar;