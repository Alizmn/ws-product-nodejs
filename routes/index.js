const express = require("express");
const router = express.Router();

/* GET home page. */
module.exports = () => {
  router.get("/", function (req, res) {
    res.send("Welcome to EQ Works 😎");
  });

  return router;
};
