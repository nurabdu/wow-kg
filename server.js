const express = require('express');
const mysql = require("mysql");

const db = mysql.createConnection({
  host : 'localhost',
  user : 'wow',
  password: 'mnbzTE9CSPtafjXy',
  database: 'main_category_menu'
});
  

db.connect(function(err) {
  if (err) throw err;
  db.query("SELECT `id`, `date_b`, `date_reg`, `first_name`, `surname`, `patronymic`, `phone`, `login`, `psw`, `email`, `publish`, `level`, `memo`, `company`, `verify`, `comment`, `balance`, `subscribe`, `currency` FROM `account` WHERE 1", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
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
  let sql = 'INSERT INTO `main_category_menu` . `account`(`id`, `date_b`, `date_reg`, `first_name`, `surname`, `patronymic`, `phone`, `login`, `psw`, `email`, `publish`, `level`, `memo`, `company`, `verify`, `comment`, `balance`, `subscribe`, `currency`) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6],[value-7],[value-8],[value-9],[value-10],[value-11],[value-12],[value-13],[value-14],[value-15],[value-16],[value-17],[value-18],[value-19])';
  db.query(sql, (err, result) =>{
    if(err) throw err;
    console.log(result);
    res.send('post table created');
  });
});

app.get('/addpost1', (req, res) => {
  let post = {title:'Womens Clothes', description:'asdf asdff werer wewe vcsdf', price_item: '12.99'};
  let sql = 'INSERT INTO `catalog`(`id`, `category`, `category2`, `category3`, `title`, `description`, `keyword`, `img`, `publish`, `user_id`, `date`, `dateup`, `price_item`, `price`, `marketing`, `size`, `color`, `have`, `currency`, `lock`) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6],[value-7],[value-8],[value-9],[value-10],[value-11],[value-12],[value-13],[value-14],[value-15],[value-16],[value-17],[value-18],[value-19],[value-20])';
  let query = db.query(sql, post, (err, result) =>{
    if (err) throw err;
    console.log(result);
    res.send('Post 1 added...');
  });
});

app.listen('3000', () => {
    console.log('Server listening on port 3000');
});
