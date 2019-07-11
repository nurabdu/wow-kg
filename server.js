const express = require('express');
const mysql = require("mysql");

const db = mysql.createConnection({
  host : 'localhost',
  user : 'wow',
  password: 'mnbzTE9CSPtafjXy',
  database: 'wow'
});
  
db.connect((err) => {
  if(err){
    throw err;
  }
  console.log('Mysql connected.');
});

const app = express();

app.get('/createdb', (req, res) => {
  let sql = 'CREATE DATABASE wow';
  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('Database created');
  });
});

app.get('/createpoststable', (req, res) => {
  let sql = 'CREATE TABLE post(id int ATUO-INCREMENT, title VARCHAR(255), body VARCHAR(255), PIMARY KEY (id))';
  db.query(sql, (err, result) =>{
    if(err) throw err;
    console.log(result);
    res.send('post table created');
  });
});

app.get('/addpost1', (req, res) => {
  let post = {title:'Womens Clothes', body:'asdf asdff werer wewe vcsdf '};
  let sql = 'INSERT INTO posts SET ?';
  let query = db.query(sql, post, (err, result) =>{
    if (err) throw err;
    console.log(result);
    res.send('Post 1 added...');
  });
});

app.listen('3000', () => {
    console.log('Server listening on port 3000');
});
