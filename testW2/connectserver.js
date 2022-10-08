const connect = require("connect");
const app = connect();
function helloWorld(req, res, next) {
  res.setHeader("Conten_Type", "text/plain");
  res.end("Hello World through connect server");
}
app.use(helloWorld);
app.listen(3000);
console.log("Serve running at http://localhost:3000/");
