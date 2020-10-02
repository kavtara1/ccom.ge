const express = require('express');

const app = express();

app.use(express.static('./dist/ccom'));

app.use(function (req, res, next) {
  console.log(req);
  res.redirect(status, "https://" + req.hostname + req.originalUrl)
  next()
})

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/ccom/'}),
);

app.listen(process.env.PORT || 8080);


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