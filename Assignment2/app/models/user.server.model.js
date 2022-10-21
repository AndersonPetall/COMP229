const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: String,
    phone: String,
    email: String,
    message: String,
  },
  {
    collection: "users",
  }
);
let options = { missingPasswordError: "Wrong / Missing Password" };
UserSchema.plugin(passportLocalMongoose, options);
module.exports = mongoose.model("User", UserSchema);
