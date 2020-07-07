require("dotenv").config();
const nodemailer = require("nodemailer");

exports.sendEmail = function (req, res, next) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: 'noreplydoss@gmail.com',
      pass: 'ThanosMail8523'
    },
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
