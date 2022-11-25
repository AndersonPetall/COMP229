const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    _id: { type: String, default: "", trim: true },
    username: { type: String, default: "", trim: true },
    password: { type: String, default: "", trim: true },
    email: { type: String, default: "", trim: true },
  },
  {
    collection: "users",
  }
);
UserSchema.plugin(passportLocalMongoose, {
  missingPasswordError: "Wrong or Missing Password !",
});
module.exports = mongoose.model("User", UserSchema);
