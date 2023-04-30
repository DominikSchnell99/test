const http = require('http');

const HOSTNAME = '127.0.0.1';
const PORT = 3080;

const server = http.createServer((req, res) => 
{
    const body = 'hello world';
    
    // Calling response.writeHead method
    res.writeHead(200, {
      'Content-Length': Buffer.byteLength(body),
      'Content-Type': 'text/plain'
    });
      
    res.end(body);

    /* user related requests
    if(req.url === '/api/users' && req.method === 'GET')
    {
    }*/
});

server.listen(PORT, () => console.log(`NodeJS server is running on ${HOSTNAME}:${PORT}`));

module.exports = server;