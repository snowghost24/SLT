// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
  entry: function( tableInput, entryInfo, resCallBack) {
    var post  = { "day_finished":entryInfo.day_finished, "vin":entryInfo.vin, "make": entryInfo.make, "model":entryInfo.model, "model_year" :entryInfo.model_year,"client_name": entryInfo.client_name, "job":entryInfo.job, "cost": entryInfo.cost, "paid_status":entryInfo.paid_status  };
    var query = connection.query('INSERT INTO vehicles SET ?', post, function (error, results, fields) {
      if (error) throw error;
      // Neat!
    }); 
  }, all: function(tableInput, resCallBack) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      resCallBack(result);
    });
  }   
}
    

// Export the orm object for the model 
module.exports = orm;




