'use strict';

const express = require('express');
const multer  = require('multer');
const pug = require('pug');

let upload = multer();
let app = express();

app.use(express.static('views'));

app.post('/', upload.single('file'), (req, res) => {
  res.end(pug.render('p #{name}: #{size} B',
                     {'name': req.file.originalname, 'size': req.file.size}));
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});