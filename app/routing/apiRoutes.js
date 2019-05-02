const anime_arr = require("../data/genres");

module.exports = function (app) {
  app.get("/api/genres", function (req, res) {
    res.json(anime_arr);
  });

  app.post("/api/genres", function (req, res) {

    // let newUser = req.body;

    // newUser.routeName = newUser.name.replace(/\s+/g, "").toLowerCase();
    // console.log(newUser);
  });
};