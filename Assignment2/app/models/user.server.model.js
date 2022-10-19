const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    firstname: String,
    lastname: String,
    email: String,
    username: String,
    password: String,
  },
  {
    collection: "users",
  }
);
let options = { missingPasswordError: "Wrong / Missing Password" };
UserSchema.plugin(passportLocalMongoose, options);
module.exports = mongoose.model("User", UserSchema);
