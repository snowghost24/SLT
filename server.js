// require dependendencies
var express = require('express');
var exphbs = require("express-handlebars");
var bodyParser = require('body-parser');
var path = require("path");
// ─────────set up express ───────────────────────────

var app = express();
var PORT = process.env.PORT || 3010;
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ─────────set up express ───────────────────────────

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// ─────────set up router ───────────────────────────

var routes = require("./controllers/routescontroller.js");
app.use("/", routes);


app.listen(PORT, function() {
   console.log("App listening on PORT " + PORT);
 });