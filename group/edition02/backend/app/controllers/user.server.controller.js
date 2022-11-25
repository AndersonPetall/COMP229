const User = require("../models/user.server.model");
const passport = require("passport");
const mongoose = require("mongoose");
//display login page
exports.displayLoginPage = (req, res, next) => {
  if (req.session.lastVisit) {
    console.log(`Last visited: ${req.session.lastVisit}`);
  }
  req.session.lastVisit = new Date();
  if (!req.user) {
    res.render("login");
  } else {
    res.redirect("/home");
  }
};
//process login
exports.authenticate = async (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      console.log("backend authentication error");
      return res.redirect("/login");
    }
    req.login(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.redirect("/events");
    });
  })(req, res, next);
};

// register
exports.registerUser = function (req, res, next) {
  let newuser = new User({
    _id: mongoose.Types.ObjectId(req.body._id),
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  });
  try {
    User.create(newuser);
  } catch (err) {
    console.log("backend register user fail");
    return next(err);
  }
};
//logout
exports.logoutUser = function (req, res, next) {
  if (req.session.lastVisit) {
    console.log(`Last visited: ${req.session.lastVisit}`);
  }
  req.logout();
  res.redirect("/");
};
