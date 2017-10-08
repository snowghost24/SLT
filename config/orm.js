// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
  all: function(tableInput, resCallBack) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      resCallBack(result);
    });
  }
}  
// Export the orm object for the model (cat.js).
module.exports = orm;
