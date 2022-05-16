const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

const uriSRV= require("./keysPrivateDB");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//ROUTES
const indexRouter = require("./routes/index");
const createGameRouter = require("./routes/createGame");
const gamesRouter = require("./routes/games");


//rutas
app.use("/", indexRouter);
app.use("/createGame", createGameRouter);
app.use("/games", gamesRouter);
app.use("/findGame", gamesRouter);


// catch 404 and forward to error handler 
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

//Cadena de conexión MongoBDlocal y MongoDBCompass
const uriLocal = "mongodb://localhost/diceGame";

//Conexión a MongoDB
mongoose
  .connect(uriSRV, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB");
  });

module.exports = app;
 