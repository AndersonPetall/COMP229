const userController = require("../../app/controllers/user.server.controller");
module.exports = function (app) {
  app.route("/users").post(userController.create).get(userController.list);
};
