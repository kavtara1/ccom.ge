// const express = require('express');

// const app = express();

// app.use(express.static('./dist/ccom'));

// app.get('/*', (req, res) =>
  // res.sendFile('index.html', {root: 'dist/ccom/'}),
// );

// app.listen(process.env.PORT || 8080);



var sslRedirect = require('heroku-ssl-redirect');
var express = require('express');
var app = express();
 
app.use(sslRedirect());
 
app.get('/', function(req, res){
  console.log('_____________________________');
  
  console.log(req, res);
  
  console.log('_____________________________');
  res.sendFile('index.html', {root: 'dist/ccom/'})
});
app.listen(3000);
