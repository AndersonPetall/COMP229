const bodyParser = require("body-parser");
var config = require("./env/development"),
  session = require("express-session"),
  express = require("express"),
  morgan = require("morgan"),
  compress = require("compression"),
  methodOverride = require("method-override");
module.exports = function () {
  var app = express();
  if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  } else if (process.env.NODE_ENV === "production") {
    app.use(compress());
  }
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  app.use(bodyParser.json());
  app.use(methodOverride());

  app.use(
    session({
      saveUninitialized: true,
      Resave: true,
      secret: config.sessionSecret,
    })
  );
  //set for ejs
  app.set("views", "./app/views");
  app.set("view engine", "ejs");
  //use router
  require("../app/routes/index.server.routes.js")(app);
  //path set
  app.use(express.static("./public"));
  return app;
};
