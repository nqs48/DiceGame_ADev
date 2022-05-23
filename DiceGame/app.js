const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

//Configuración de paquete .env
require("dotenv").config();

//configuración puerto para despliegue
const port = process.env.PORT || 3000;

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/public',express.static("public"));

//Web Routes
// const gamesRouter = require("./routes/games");

//Routes
app.use("/", require("./routes/index"));
app.use("/createGame", require("./routes/createGame"));
app.use("/findGame", require("./routes/findGame"));
app.use("/deleteGame", require("./routes/deleteGame"));
app.use("/startGame", require("./routes/startGame"));
app.use("/winnerGame", require("./routes/winnerGame"));
app.use("/games", require("./routes/games"));

// app.use("/games", gamesRouter);
// app.use("/findGame", gamesRouter);

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
const uriSRV = `mongodb+srv://${process.env.USERMDB}:${process.env.PASSWORD}@cluster0.j505h.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose
  .connect(uriSRV, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB ", uriSRV));

module.exports = app;
