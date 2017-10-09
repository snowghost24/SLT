var express = require("express");
var router = express.Router();
var call = require("../models/ormcalls.js");
var exphbs = require("express-handlebars");

// Create all our routes and set up logic within those routes where required.
// ──────Home route──────────────────────────────────────────────────────────────────────────
router.get("/", function(req, res) {

    res.render("index.handlebars"); 
  });



// ───────Entry─────────────────────────────────────────────────────────────────────────
  router.post("/entry", function(req, res) {
    var entryInfo = req.body.data;
    call.entry(entryInfo);
    res.redirect("/");
  });


  router.get("/displayit", function (req, res) {
    console.log(" Im in the back");
    call.all(function (returnedData) {
      var theObj = { vehicles: returnedData }
      res.render("index",theObj );
    });
  });


  // ──────Entry──────────────────────────────────────────────────────────────────────────
module.exports = router;
