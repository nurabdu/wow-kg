const express = require('express');
const mysql = require("mysql");

const db = mysql.createConnection({
  host : 'localhost',
  user : 'admin',
  password: 'nurajg96',
  database: 'riiiix'
});
  
db.connect((err) => {
  if(err){
    throw err;
  }
  console.log('MySql connected..');
});

const app = express();

app.get('/account', function(req, res){
  db.query("SELECT * FROM account", function(error, rows, fields){
    if(!!error){
      console.log('Error in the query');
    } else {
      console.log('Successfun\n');
      res.send(rows);
    }
  });
});

app.get('/color', function(req, res){
  db.query("SELECT * FROM color", function(error, rows, fields){
    if(!!error){
      console.log('Error in the query');
    } else {
      console.log('Successfun\n');
      res.send(rows);
    }
  });
});

app.get('/gallery', function(req, res){
  db.query("SELECT * FROM gallery", function(error, rows, fields){
    if(!!error){
      console.log('Error in the query');
    } else {
      console.log('Successfun\n');
      res.send(rows);
    }
  });
});

app.listen("3000", () => {
  console.log('Server listening on port 3000');
});
