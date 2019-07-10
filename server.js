const express = require('express');
const mysql = require("mysql");

const db = mysql.createConnection({
  host : 'localhost',
  user : 'wow',
  password: 'mnbzTE9CSPtafjXy',
  database: 'main_category_menu'
});
  
db.connect(function (err){
  if(err) throw err;
      db.query("SELECT * from gallery", function(err, result, fields){
        if(err) throw err;
        console.log(result);
    });
});

const app = express();

app.get('/createdb', (req, res)=> {
  let sql = 'CREATE DATABASE wow.kg';
  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('Database created...');
  });
});

app.post('/postdb', (req, res) => {
  let sql = 'POST DATABASE main_category_menu';
  db.query(sql, (err, result) => {
    if(err) throw err;
  })
})
app.listen('3000', () => {
  console.log('Server started on port 3000');
});
