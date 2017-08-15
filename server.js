const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();
const nodemailer = require('nodemailer');
// const router = require('router'); Router placed on this line
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json()); // You must have to this parse req.body
app.use(express.static('public'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

const port = process.env.PORT || 5000;
const server = app.listen(port, function () {
  console.log('MnTech is listening on port', server.address().port);
});

let transporter = nodemailer.createTransport({
  // host: 'smtp.example.com',
  service: 'gmail',
  auth: {
      user: 'mntechcoop@gmail.com',
      pass: 'Mn*Tech*2017!'
  },
});

app.post('/postEmail', function(req, res) {

  let mailOptions = {
      to: req.body.to,
      subject: 'Quote for Project.',
      text: req.body.description,
      html: '<b>From: </b>' + req.body.from + '<br />' + '<b>Project Description: </b>' + req.body.description
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log("From sendMail: ", error, "Object: ", mailOptions);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
  });
});
