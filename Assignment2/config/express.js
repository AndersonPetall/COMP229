const bodyParser = require("body-parser");
var config = require("./env/development");
var session = require("express-session");
var express = require("express");
var morgan = require("morgan");
var compress = require("compression");
var methodOverride = require("method-override");
var passport = require("passport");
var passportLocal = require("passport-local").Strategy;
var User = require("../app/models/user.server.model");
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
      resave: true,
      secret: config.sessionSecret,
    })
  );
  // Initialize passport
  app.use(passport.initialize());
  app.use(passport.session());
  //implement a user authentication stratagy
  passport.use(User.createStrategy());
  // Serialize and Deserialize User info
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());
  //  Set and Use the stratagy
  passport.use(
    new passportLocal((username, password, done) => {
      User.findByUsername(username, (error, user) => {
        if (error) return done(error);
        if (!user) return done(null, false);
        if (user.password !== password) return done(null, false);
        return done(null, user);
      });
    })
  );
  //set for ejs
  app.set("views", "./app/views");
  app.set("view engine", "ejs");
  //path set
  app.use(express.static("./public"));
  app.use(express.json());
  //use router
  require("../app/routes/index.server.routes.js")(app);
  require("../app/routes/user.server.routes.js")(app);
  return app;
};
