require("dotenv").config();
const xoauth2 = require('xoauth2');
const nodemailer = require("nodemailer");

exports.sendEmail = function (req, res, next) {
  let transporter = nodemailer.createTransport({
      service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type:'OAuth2',
        user: 'noreplydoss@gmail.com',
            clientId:'984444525687-gvj38pdvfeoo66u95i2tsl4p05khvhbk.apps.googleusercontent.com',
        clientSecret:'UQUSBrwMW95DywSoVuibVQDa',
        refreshToken:'1//04KZaPmL4BcGmCgYIARAAGAQSNgF-L9IrmSnCJN1nOyILmtAjPhP7cG9L6A5HI9hRnONoIlKyMkf9KQGtPET6z8liiP7HeoI70Q'
        
        // xoauth2: xoauth2.createXOAuth2Generator({
        //     user: 'noreplydoss@gmail.com',
        //     clientId:'984444525687-gvj38pdvfeoo66u95i2tsl4p05khvhbk.apps.googleusercontent.com',
        // clientSecret:'UQUSBrwMW95DywSoVuibVQDa',
        // refreshToken:'1//04KZaPmL4BcGmCgYIARAAGAQSNgF-L9IrmSnCJN1nOyILmtAjPhP7cG9L6A5HI9hRnONoIlKyMkf9KQGtPET6z8liiP7HeoI70Q'
        // })
    }
    // host: 'smtp.fastmail.com',
    // port: 465,
    // secure: true,
    // auth: {
    //   user: 'agiet@fastmail.net',
    //   pass: 'vpkwuya98hnubhrf'
    // },
  });
  console.log("email req body");
  console.log(req.body.mailOptions);

  transporter.sendMail(req.body, (error, data) => {
    if (error) {
      res.send({ error: error });
      console.log(error);
    }
    res.send({success : data });
    console.log(`email sent ${data}`);
  });
};