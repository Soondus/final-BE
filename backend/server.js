const http = require('http');

const server = http.createServer((req,res) => {
    res.end('Welcome to women in tech dxb!');

});

server.listen(process.env.PORT || 3000);