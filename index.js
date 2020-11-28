require("dotenv").config();

var express = require("express");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 3000;
/*** ejs ***/
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

/*** express ***/

app.get("/", function homePage(req, res) {
  res.send("layout");
});

app.listen(PORT, function listenOnPort() {
  console.log(`Listening on port ${PORT}`);
});
