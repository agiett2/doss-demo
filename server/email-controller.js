require("dotenv").config();
const nodemailer = require("nodemailer");

exports.sendEmail = function (req, res, next) {
  let transporter = nodemailer.createTransport({
    host: "relay-hosting.secureserver.net",
    service: "GoDaddy",
    secureConnection: true,
    port: 25,
    auth: {
      user: "agiet_doss@askdoss.com",
      pass: "ThanosMail8523",
    },
  });
  console.log("email req body");
  console.log(req.body);

  transporter.sendMail(req.body.mailOptions, (error, data) => {
    if (error) {
      res.send({ error: error });
      console.log(error);
    }
    res.send({success : data });
    console.log(`email sent ${data}`);
  });
};
