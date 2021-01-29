const express = require("express");
const router = express.Router();

/* GET home page. */
module.exports = ({ getPoi }) => {
  router.get("/", function (req, res) {
    getPoi().then((event) => res.json(event));
  });

  return router;
};
