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

app.post('/postQuoteEmail', function(req, res) {

  // setup email data with unicode symbols
  let mailOptions = {
      from: req.body.from, // sender address
      to: req.body.to, // list of receivers
      subject: req.body.subject, // Subject line
      name: req.body.name,
      sender: req.body.sender,
      phone: req.body.phone,
      text: req.body.description, // plain text body
      html: '<h4>Name:</h4><p> ' + req.body.name + '</p>' +
            '<h4>Phone:</h4><p> ' + req.body.phone + '</p>' +
            '<h4>Organization:</h4><p> ' + req.body.organization + '</p>' +
            '<h4>Email:</h4><p> ' + req.body.email + '</p>' +
            '<h4>Project Description:</h4><p> ' + req.body.description + '</p>'
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log("From sendMail: ", error, "Object: ", mailOptions);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
  });
});

app.post('/postMembershipEmail', function(req, res) {

  // setup email data with unicode symbols
  let mailOptions = {
      from: req.body.from, // sender address
      to: req.body.to, // list of receivers
      subject: req.body.subject, // Subject line
      name: req.body.name,
      sender: req.body.sender,
      phone: req.body.phone,
      text: req.body.description, // plain text body
      html: '<h4>Name:</h4><p> ' + req.body.name + '</p>' +
            '<h4>Address:</h4><p> ' + req.body.address + '</p>' +
            '<h4>Phone:</h4><p> ' + req.body.phone + '</p>' +
            '<h4>Email:</h4><p> ' + req.body.email + '</p>' +
            '<h4>Work Sample:</h4><p> ' + req.body.sample + '</p>' +
            '<h4>Info:</h4><p> ' + req.body.info + '</p>'
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log("From sendMail: ", error, "Object: ", mailOptions);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
  });
});
