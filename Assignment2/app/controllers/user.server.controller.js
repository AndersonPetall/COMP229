const mongoose = require("../../config/mongoose");
const User = require("../models/user.server.model");
exports.create = async function (req, res, next) {
  let sample = new User({
    name: "name2",
    phone: "name3",
    email: "email1@gmail.com",
    message: "name3",
  });
  try {
    let user = new User(sample);
    //let user = new User(req.body);
    await user.save();
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
