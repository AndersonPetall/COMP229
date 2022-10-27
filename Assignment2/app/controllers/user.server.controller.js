const mongoose = require("../../config/mongoose");
const User = require("../models/user.server.model");
const passport = require("passport");
// Render login page
exports.renderLoginPage = (req, res, next) => {
  if (req.session.lastVisit) {
    console.log(req.session.lastVisit);
  }
  req.session.lastVisit = new Date();
  if (!req.user) {
    res.render("Login", {
      title: "Login",
      // alert: 'User Does Not Exist',
      //displayName: req.user ? req.user.displayName : "",
    });
  } else {
    res.redirect("/List");
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
      return res.redirect("/Login");
    }

    req.login(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.redirect("/List");
    });
  })(req, res, next);
};

exports.createOrRegisterUser = function (req, res, next) {
  try {
    User.create(req.body);
    res.redirect("/List");
  } catch (err) {
    console.log("no");
    return next(err);
  }
};
exports.list = async function (req, res, next) {
  if (!req.user) {
    res.redirect("/NotAllow");
  } else {
    User.find({}, (err, users) => {
      if (err) {
        return next(err);
      } else {
        res.render("BusinessContactsList", {
          title: "BusinessContactListPage Page",
          users: users,
        });
      }
    }).sort({ username: 1 });
  }
};
exports.listOne = async function (req, res, next) {
  if (req.session.lastVisit) {
    console.log(req.session.lastVisit);
  }
  req.session.lastVisit = new Date();
  User.findById(req.params.id, (err, user) => {
    if (err) {
      return next(err);
    } else {
      res.render("BusinessContactsListOne", {
        title: "BusinessContactsListDetail Page",
        classTypeInfor: "show",
        activity: "Update",
        classTypeUpdate: "show",
        classTypeDelete: "show",
        classTypeCancel: "show",
        classTypeRegister: "notshow",
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
      res.redirect("/List");
    }
  });
};
exports.delete = async function (req, res, next) {
  User.findByIdAndDelete(req.params.id, (err) => {
    if (err) {
      return next(err);
    } else {
      res.redirect("/List");
    }
  });
};

exports.renderRegisterPage = function (req, res) {
  if (req.session.lastVisit) {
    console.log(req.session.lastVisit);
  }
  req.session.lastVisit = new Date();
  res.render("Register", {
    title: "Register Page",
    classTypeInfor: "notshow",
    activity: "Register",
    classTypeUpdate: "notshow",
    classTypeDelete: "notshow",
    classTypeCancel: "notshow",
    classTypeRegister: "show",
    user: "",
  });
};

exports.renderNotAllowPage = function (req, res) {
  if (req.session.lastVisit) {
    console.log(req.session.lastVisit);
  }
  req.session.lastVisit = new Date();
  res.render("NotAllow", {
    title: "Not Allow Page",
  });
};
