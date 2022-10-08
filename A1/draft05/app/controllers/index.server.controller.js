exports.renderHomePage = function (req, res) {
  if (req.session.lastVisit) {
    console.log(req.session.lastVisit);
  }
  req.session.lastVisit = new Date();
  res.render("HomePage", {
    title: "Home Page",
  });
};
exports.renderContactMe = function (req, res) {
  if (req.session.lastVisit) {
    console.log(req.session.lastVisit);
  }
  req.session.lastVisit = new Date();
  res.render("ContactMe", {
    title: "Contact Me",
  });
};
exports.renderAboutMe = function (req, res) {
  if (req.session.lastVisit) {
    console.log(req.session.lastVisit);
  }
  req.session.lastVisit = new Date();
  res.render("AboutMe", {
    title: "About Me",
  });
};
exports.renderProjectsPage = function (req, res) {
  if (req.session.lastVisit) {
    console.log(req.session.lastVisit);
  }
  req.session.lastVisit = new Date();
  res.render("ProjectsPage", {
    title: "Projects Page",
  });
};
exports.renderServicesPage = function (req, res) {
  if (req.session.lastVisit) {
    console.log(req.session.lastVisit);
  }
  req.session.lastVisit = new Date();
  res.render("ServicesPage", {
    title: "Services Page",
  });
};
exports.renderMessagesPage = function (req, res) {
  if (req.session.lastVisit) {
    console.log(req.session.lastVisit);
  }
  req.session.lastVisit = new Date();
  console.log(req.body);
  res.render("MessagesPage", {
    title: "Messages Page",
  });
};
