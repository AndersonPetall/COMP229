module.exports = function (app) {
  var index = require("../controllers/index.server.controller");
  //set file with respond ejs file
  app.get("/HomePage", index.renderHomePage);
  app.get("/", index.renderHomePage);
  app.get("/AboutMe", index.renderAboutMe);
  app.get("/ContactMe", index.renderContactMe);
  app.get("/ProjectsPage", index.renderProjectsPage);
  app.get("/ServicesPage", index.renderServicesPage);
  app.get("/MessagesPage", index.renderMessagesPage);
  //post for the form in ContactMe Page
  app.post("/MessagesPage", index.renderMessagesPage);
};
