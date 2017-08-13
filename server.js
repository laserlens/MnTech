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


app.post('/postEmail', function(req, res) {
  let transporter = nodemailer.createTransport({
    // host: 'smtp.example.com',
    port: 5000,
    secure: false, // secure:true for port 465, secure:false for port 587
    auth: {
        user: 'mntechcoop@gmail.com',
        pass: 'Mn*Tech*2017!'
    },
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: req.body.from, // sender address
      to: req.body.to, // list of receivers
      subject: 'Quote for Project.', // Subject line
      text: req.body.description, // plain text body
      // html: '<b>Hello world ?</b>' // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log("From sendMail: ", error, "Object: ", mailOptions);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
  });
});
