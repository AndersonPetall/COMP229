let user = require("../controllers/user.server.controller");
module.exports = function (app) {
  app.route("/api/login").get(user.authenticate);
  app.route("/api/register").post(user.registerUser);
  app.route("/api/logout").get(user.logoutUser);
};
