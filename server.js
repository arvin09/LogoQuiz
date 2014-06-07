var connect = require('connect');
connect.createServer(
    connect.static(__dirname)
).listen(9999);
console.log("Connect to 9999 port");