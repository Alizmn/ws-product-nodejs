const express = require("express");
const router = express.Router();

/* GET home page. */
module.exports = ({ getStatsHourly, getStatsDaily }) => {
  router.get("/hourly", function (req, res) {
    getStatsHourly().then((event) => res.json(event));
  });
  router.get("/daily", function (req, res) {
    getStatsDaily().then((event) => res.json(event));
  });
  return router;
};
