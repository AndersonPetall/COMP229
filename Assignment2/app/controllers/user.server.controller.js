const mongoose = require("../../config/mongoose");
const User = require("../models/user.server.model");
exports.create = async function (req, res, next) {
  let sample = new User({
    firstname: "name2",
    lastname: "name3",
    email: "email1@gmail.com",
    username: "name3",
    password: "234",
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
exports.list = function (req, res, next) {
  User.find({}, (err, users) => {
    if (err) {
      return next(err);
    } else {
      res.status(200).json(users);
    }
  });
};
