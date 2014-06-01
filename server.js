var connect = require('connect');
connect.createServer(
    connect.static(__dirname)
).listen(9000);
console.log("Connect to 9000 port");