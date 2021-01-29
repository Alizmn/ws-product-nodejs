const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const db = require("./db");
const dbHelpers = require("./models")(db);

const indexRouter = require("./routes/index");
const eventsRouter = require("./routes/events");
const statsRouter = require("./routes/stats");
const poiRouter = require("./routes/poi");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter());
app.use("/events", eventsRouter({ ...dbHelpers }));
app.use("/stats", statsRouter({ ...dbHelpers }));
app.use("/poi", poiRouter({ ...dbHelpers }));

module.exports = app;
