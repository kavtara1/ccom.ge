// import express, { static } from 'express';
const express = require('express');
const app = express();
const port = process.env.PORT || 9000;

// app.use(express.static('./dist/ccom'));

app.use((req, res, next) => {
  console.log(123);
  // console.log(req);
  // debugger
  // req.protocol != 'https'
  //   ? res.redirect("https://" + "localhost:9000")
  //   : next();
  res.redirect("https://" + req.headers.host + req.url)
});

app.get('/', (req, res) => {
  console.log(1111111111111111111111);
  res.sendFile('index.html', { root: 'dist/ccom/' });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


// import sslRedirect from 'heroku-ssl-redirect/dist/index.js';
// import express from 'express';

// Object.defineProperty(exports, "__esModule", { value: true });
// const sslRedirect = (environments = ["production"], status = 302) => {
//     const currentEnv = process.env.NODE_ENV;
//     const isCurrentEnv = environments.includes(currentEnv);
//     return (req, res, next) => {
//         if (isCurrentEnv) {
//             req.headers["x-forwarded-proto"] !== "https"
//                 ? res.redirect(status, "https://" + req.hostname + req.originalUrl)
//                 : next();
//         }
//         else
//             next();
//     };
// };

// var sslRedirect = require('heroku-ssl-redirect');
// var express = require('express');
// var app = express();
// app.use(express.static('./dist/ccom'));

// app.use(sslRedirect());
 
// app.get('/', function(req, res){
//   res.sendFile('index.html', {root: 'dist/ccom/'})
// });

// app.listen(process.env.PORT || 3000);