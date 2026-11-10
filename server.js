
const http = require('node:http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (req.url === '/health') {
    res.writeHead(200);
    return res.end(JSON.stringify({
      status: 'ok',
      timestamp: new Date().toISOString(),
    }));
  }

  if (req.url === '/') {
    res.writeHead(200);
    return res.end(JSON.stringify({
      message: 'Hello from Node.js on Render!',
      node: process.version,
      uptime: Math.floor(process.uptime()),
    }));
  }

  res.writeHead(404);
  res.end(JSON.stringify({ error: 'Not found' }));
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on port ${PORT}`);
});
