const User = require("../models/user.server.model");
const passport = require("passport");
const mongoose = require("mongoose");

//process login
exports.loginUser = async (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      console.log("backend login error");
      res.json({ success: false, msg: "backend login fail" });
    }
    req.login(user, (err) => {
      if (err) {
        return next(err);
      }
      res.json({
        success: true,
        msg: "backend login successfully",
        user: user,
      });
    });
  })(req, res, next);
};

// register
exports.registerUser = async function (req, res, next) {
  let newuser = new User({
    _id: mongoose.Types.ObjectId(req.body._id),
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  });
  try {
    User.create(newuser);
    res.json({
      success: true,
      msg: "backend create User successfully",
      user: newuser,
    });
  } catch (err) {
    console.log("backend register user fail");
    return next(err);
  }
};
//logout
exports.logoutUser = async function (req, res, next) {
  if (req.session.lastVisit) {
    console.log(`Last visited: ${req.session.lastVisit}`);
  }
  try {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.json({ success: true, msg: "backend logout successfully" });
    });
  } catch (err) {
    console.log("backend logout user fail");
    return next(err);
  }
};
