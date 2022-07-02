const http = require('http');

const server = http.createServer((req,res) => {
    res.end('Welcome to Carbon green!');

});

server.listen(process.env.PORT || 3000);