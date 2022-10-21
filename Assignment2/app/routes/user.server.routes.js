const userController = require("../../app/controllers/user.server.controller");
module.exports = function (app) {
  //app.post("/users", userController.create).get("/users", userController.list);
  //app.get("/list", userController.list);
  app.route("/list").get(userController.list);
  app
    .route("/list/:id")
    .get(userController.listOne)
    .post(userController.update)
    .delete(userController.delete);
  app
    .route("/list/update/:id")
    .get(userController.listOne)
    .post(userController.update);
  app.route("/list/delete/:id").post(userController.delete);
  app.get("/Update", userController.renderUpdatePage);
  app.get(
    "/BusinessContactsList",
    userController.renderBusinessContactsListPage
  );
};
