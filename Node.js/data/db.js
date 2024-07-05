const mysql = require("mysql2");
const config = require("../config");
let connection = mysql.createConnection(config.db);
connection.connect(function (err) {
  if (err) {
    console.log(err);
  }
  //   connection.query("select * from products", function (err, result) {
  //     console.log(result[0].name);
  //   });
  console.log("mysgl bağlantısı yapıldı.");
});

module.exports = connection.promise();
