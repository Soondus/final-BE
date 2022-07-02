const http = require('http');

const server = http.createServer((req,res) => {
    res.end('Welcome to Carbon green!');
    console.log("Successfully connected to the server");

});

server.listen(process.env.PORT || 3000);