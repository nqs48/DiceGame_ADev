const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const app = express();

/**
 * Settings for package dotenv
 */
require("dotenv").config();

/**
 * Port configuration for deployment
 */
const port = process.env.PORT || 3000;

/**
 * path view configuration
 */
app.set("views", path.join(__dirname, "views"));

/**
 * view engine configuration
 */
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/**
 * Static file path configuration
 */
app.use('/public',express.static("public"));

/**
 * Route INDEX configuration with the assigned router
 */
app.use("/", require("./routes/index"));

/**
 * Route CREATE GAME configuration with the assigned router
 */
app.use("/createGame", require("./routes/createGame"));

/**
 * Route FIND GAME configuration with the assigned router
 */
app.use("/findGame", require("./routes/findGame"));

/**
 * Route DELETE GAME configuration with the assigned router
 */
app.use("/deleteGame", require("./routes/deleteGame"));

/**
 * Route START GAME configuration with the assigned router
 */
app.use("/startGame", require("./routes/startGame"));

/**
 * Route WINNER GAME configuration with the assigned router
 */
app.use("/winnerGame", require("./routes/winnerGame"));

/**
 * Route GAMES configuration with the assigned router
 */
app.use("/games", require("./routes/games"));


/**
 * catch 404 and forward to error handler
 */
app.use(function (req, res, next) {
  next(createError(404));
});

/**
 * error handler
 */
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

/**
 * MongoBDlocal connection string
 */
const uriLocal = "mongodb://localhost/diceGame";

/**
 * MongoDBCompass connection string
 */
const uriSRV = `mongodb+srv://${process.env.USERMDB}:${process.env.PASSWORD}@cluster0.j505h.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

/**
 * Database connection method
 */
mongoose
  .connect(uriSRV, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB ", uriSRV));

module.exports = app;
