const userController = require("../../app/controllers/user.server.controller");
module.exports = function (app) {
  app.route("/List").get(userController.list);
  app
    .route("/Login")
    .get(userController.renderLoginPage)
    .post(userController.loginUser);
  app
    .route("/ListOne/update/:id")
    .get(userController.listOne)
    .post(userController.update);
  app.route("/ListOne/delete/:id").post(userController.delete);
  app
    .route("/Register")
    .get(userController.renderRegisterPage)
    .post(userController.createOrRegisterUser);
  app.route("/NotAllow").get(userController.renderNotAllowPage);
};
