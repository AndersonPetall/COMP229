let user = require("../controllers/user.server.controller");
module.exports = function (app) {
  app.route("/api/login").post(user.loginUser);
  app.route("/api/register").post(user.registerUser);
  app.route("/api/logout").delete(user.logoutUser);
};
