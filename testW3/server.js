process.env.NODE_ENV = process.env.NODE_ENV || "development";

var express = require("./config/express");
var app = express();

var HOST = "localhost";
var PORT = 3000;

// app.use("/", function (req, res) {
//   console.log(`The requrest url is ${res.url}`);
//   console.log(`The requrest body is ${res.body}`);
//   res.send("Hello World");
// });

// var hasName = function (req, res, next) {
//   if (req.param("name")) {
//     next();
//   } else {
//     res.send("What is your name ?");
//   }
// };
// var sayHello = function (req, res, next) {
//   res.send(`My name is ${req.param("name")}`);
// };
// var app = express();
// app.get("/", hasName, sayHello);

app.listen(PORT);
console.log(`Server running at http://${HOST}:${PORT}/`);
module.exports = app;
