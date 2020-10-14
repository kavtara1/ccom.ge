const express = require('express');
const app = express();
const port = process.env.PORT || 9000;

app.use(express.static('./dist/ccom'));

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: 'dist/ccom/' });

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
