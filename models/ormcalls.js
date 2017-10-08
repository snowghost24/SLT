// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var call = {
  all: function(reqCallBack) {
    orm.all("vehicles", function(res) {
    reqCallBack(res);
    });
  },
}


// Export the database functions for the controller (catsController.js).
module.exports = call;
