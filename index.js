const http = require("node:http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Hello, world!");
});

const port = process.env.PORT || 3000;

server.listen(port, "0.0.0.0", () => {
  console.info(`Server is running on port ${port}`);
});