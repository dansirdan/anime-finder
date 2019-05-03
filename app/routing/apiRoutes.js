const anime_arr = require("../data/genres");
const user_arr = require("../data/users");

module.exports = function (app) {
  app.get("/api/genres", function (req, res) {
    res.json(anime_arr);
  });

  app.get("/api/users", function (req, res) {
    res.json(user_arr);
  })

  app.post("/api/genres", function (req, res) {

    // let newUser = req.body;
    anime_arr.push(req.body);
    // newUser.routeName = newUser.name.replace(/\s+/g, "").toLowerCase();
    // console.log(newUser);
  });

  app.post("/api/users", function (req, res) {

    user_arr.push(req.body);

  })
};