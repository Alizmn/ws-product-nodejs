const express = require("express");
const router = express.Router();

/* GET home page. */
module.exports = ({ getEventsHourly, getEventsDaily }) => {
  router.get("/hourly", function (req, res) {
    getEventsHourly().then((event) => res.json(event));
  });
  router.get("/daily", function (req, res) {
    getEventsDaily().then((event) => res.json(event));
  });
  return router;
};
