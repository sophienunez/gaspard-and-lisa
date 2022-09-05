const express = require('express');
const server = express();

server.use(express.static(__dirname + '/public'));
server.listen(8056, () => console.log('servidor corriendo'));