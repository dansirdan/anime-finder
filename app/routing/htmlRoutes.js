const path = require("path")

module.exports = function (app) {

  app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // If no matching route found...default them to the home page.
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  })

};