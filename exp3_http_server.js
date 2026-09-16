const http = require('http');
const PORT = 3000;
const server = http.createServer((req,res) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    //set status code and headers
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('X-Powdered-By','Node.js');
    //send response body
    res.end('Hello World');
});
server.listen(PORT,()=> {
    console.log(`Server running at http://localhost:${PORT}`);
});    