const mongoose = require("../../config/mongoose");
const User = require("../models/user.server.model");
const passport = require("passport");
// Render login page
exports.getLoginPage = (req, res, next) => {
  if (!req.user) {
    res.render("login", {
      title: "Login",
      // alert: 'User Does Not Exist',
      //displayName: req.user ? req.user.displayName : "",
    });
  } else {
    res.redirect("/list");
  }
};

// Process Login of User
exports.loginUser = async (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      console.log("Authentication Error");
      return res.redirect("/login");
    }

    req.login(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.redirect("/list");
    });
  })(req, res, next);
};

exports.create = function (req, res, next) {
  try {
    User.create(req.body);
    res.redirect("/list");
  } catch (err) {
    console.log("no");
    return next(err);
  }
};
exports.list = async function (req, res, next) {
  User.find({}, (err, users) => {
    if (err) {
      return next(err);
    } else {
      res.render("BusinessContactsList", {
        title: "BusinessContactListPage Page",
        users: users,
      });
    }
  }).sort({ name: 1 });
};
exports.listOne = async function (req, res, next) {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      return next(err);
    } else {
      res.render("BusinessContactsListDetail", {
        title: "BusinessContactsListDetail Page",
        user: user,
      });
    }
  });
};
exports.update = async function (req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
    if (err) {
      return next(err);
    } else {
      console.log(user);
      res.redirect("/list");
    }
  });
};
exports.delete = async function (req, res, next) {
  User.findByIdAndDelete(req.params.id, (err) => {
    if (err) {
      return next(err);
    } else {
      res.redirect("/list");
    }
  });
};
exports.renderLoginPage = function (req, res) {
  if (req.session.lastVisit) {
    console.log(req.session.lastVisit);
  }
  req.session.lastVisit = new Date();
  res.render("Login", {
    title: "Login Page",
  });
};
exports.renderUpdatePage = function (req, res) {
  if (req.session.lastVisit) {
    console.log(req.session.lastVisit);
  }
  req.session.lastVisit = new Date();
  res.render("Update", {
    title: "Update Page",
  });
};
exports.renderBusinessContactsListPage = function (req, res) {
  if (req.session.lastVisit) {
    console.log(req.session.lastVisit);
  }
  req.session.lastVisit = new Date();
  res.render("BusinessContactsList", {
    title: "BusinessContactListPage Page",
  });
};
exports.renderRegisterPage = function (req, res) {
  if (req.session.lastVisit) {
    console.log(req.session.lastVisit);
  }
  req.session.lastVisit = new Date();
  res.render("Register", {
    title: "Register Page",
  });
};
