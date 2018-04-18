var express = require('express');
var server = express();

server.use('/', express.static(__dirname));

server.listen(8000, function () {
    console.log('Server is listening port: 8000');
});