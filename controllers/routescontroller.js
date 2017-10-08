var express = require("express");
var router = express.Router();
var call = require("../models/ormcalls.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  // console.log(req.body);
  function reqCallBack (data) {
    var returnObject = {
      vehicles: data
    }; 
    
    // console.log(returnObject);
    res.render("index", returnObject);
      }
    call.all(reqCallBack);
  });

  router.post("/test", function(req, res) {
    function reqCallBack (data) {
      var returnObject = {
        vehicles: data
      };
      console.log(req.body);
      // console.log(returnObject);
      res.render("index", returnObject);
        }
    call.all(reqCallBack);
  });



module.exports = router;
