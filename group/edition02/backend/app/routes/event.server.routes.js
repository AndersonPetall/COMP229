let event = require("../controllers/event.server.controller");
module.exports = function (app) {
  app.get("/api/get-events", event.displayAllEvent);
  app.get("/api/delete/:_id", event.deleteEvent);
  app.post("/api/update/:_id", event.updateEvent);
  app.get("/api/:_id", event.displayOneEvent);
  app.post("/api/create", event.createOneEvent);
};
