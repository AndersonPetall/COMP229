const connect = require("connect");
const app = connect();
function logger(req, res, next) {
  console.log(req.method, req.url);
  next();
}
function helloWorld(req, res, next) {
  res.setHeader("Conten_Type", "text/plain");
  res.end("Hello World through connect server2");
}
function goodbyeWorld(req, res, next) {
  res.setHeader("Content-Type", "text/plain");
  res.end("Goodbye world in connect server2");
}
app.use(logger);
app.use("/hello", helloWorld);
app.use("/goodbyeWorld", goodbyeWorld);
app.listen(3000);
console.log("Serve running at http://localhost:3000/");
