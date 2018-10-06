var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost", // ip address of server running mysql
    user: "root", // user name to your mysql database
    password: "root", // corresponding password
    database: "studentsDB" // use this database to querying context
  });

  // make to connection to the database.
con.connect(function(err) {
    if (err) throw err;
    // if connection is successful
    con.query("INSERT INTO studentsDB.user (id, name,email,mobile) values (1, 'CodingKrishna','codingkrishna@gmail.com','95')", function (err, result, fields) {
      // if any error while executing above query, throw error
      if (err) throw err;
      // if there is no error, you have the result
      console.log(result);
    });
  });

con.query("SELECT * FROM studentsDB.user", function (err, result, fields) {
    // if any error while executing above query, throw error
    if (err) throw err;
    // if there is no error, you have the result
    console.log(result);
});

// make to connection to the database.
con.query("SELECT * FROM studentsDB.user where id = 1", function (err, result, fields) {
    // if any error while executing above query, throw error
    if (err) throw err;
    // if there is no error, you have the result
    console.log(result);
});

con.query("UPDATE studentsDB.user SET mobile='8123870076' WHERE id=1", function (err, result, fields) {
    // if any error while executing above query, throw error
    if (err) throw err;
    // if there is no error, you have the result
    console.log(result);
  });

con.query("DELETE FROM studentsDB.user", function (err, result, fields) {
    // if any error while executing above query, throw error
    if (err) throw err;
    // if there is no error, you have the result
    console.log(result);
});