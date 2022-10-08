module.exports = function (app) {
  var index = require("../controllers/index.server.controller");
  app.get("/HomePage", index.renderHomePage);
  app.get("/AboutMe", index.renderAboutMe);
  app.get("/ContactMe", index.renderContactMe);
  app.get("/ProjectsPage", index.renderProjectsPage);
  app.get("/ServicesPage", index.renderServicesPage);
  app.get("/MessagesPage", index.renderMessagesPage);
  app.post("/MessagesPage", index.renderMessagesPage);
  //console.log(`Rendering '/' from index.server.controller`);
};
