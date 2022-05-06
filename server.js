const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Node request test');
});

server.listen(port, () => {
  console.log(`Server Listening: http://localhost:${port}`);
});
