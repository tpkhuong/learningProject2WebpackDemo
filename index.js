require("dotenv").config();

var express = require("express");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 3000;
/*** ejs ***/
app.set("views engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(expres.static(path.join(__dirname, "public")));

/*** express ***/

app.get("/", function homePage(req, res) {
  res.send("Hello everyone");
});

app.listen(PORT, function listenOnPort() {
  console.log(`Listening on port ${PORT}`);
});
