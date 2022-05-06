const http = require('http');
const port = 3000;

const routes = {
  '/': 'Test 1',
  '/books': 'Page books',
  '/author': 'Page author',
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(routes[req.url]);
});

server.listen(port, () => {
  console.log(`Server Listening: http://localhost:${port}`);
});
