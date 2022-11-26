require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const compress = require("compression");
const bodyParser = require("body-parser");
const methOverride = require("method-override");
const session = require("express-session");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const User = require("../app/models/user.server.model");

module.exports = function () {
  const app = express();
  if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  } else if (process.env.NODE_ENV === "production") {
    app.use(compress());
  }
  app.use(
    bodyParser.urlencoded({
      extend: true,
    })
  );
  app.use(bodyParser.json());
  app.use(methOverride());
  //app.use(bodyParser.session());
  app.use(
    session({
      saveUninitialized: true,
      Resave: true,
      secret: process.env.sessionSecret,
    })
  );
  app.use(
    cors({
      origin: "*",
    })
  );
  //initialize passport
  app.use(passport.initialize());
  app.use(passport.session());
  //implement a user authentication stratage
  passport.use(User.createStrategy());
  //serialize and deserialize user information
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());
  //set and use the strategy
  passport.use(
    new passportLocal((username, password, done) => {
      User.findByUsername(username, (err, user) => {
        if (err) return done(err);
        if (!user) return done(null, false);
        if (user.password !== password) return done(null, false);
        return done(null, user);
      });
    })
  );

  app.use(express.static("./public"));
  //ROUTE
  require("../app/routes/event.server.routes")(app);
  require("../app/routes/user.server.routes")(app);
  return app;
};
