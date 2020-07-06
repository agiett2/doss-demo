require('dotenv').config();
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, 
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

let mailOptions = {
    from: 'agiet@askdoss.com', 
    to: 'agiett2@gmail.com', 
    subject: 'Testing',
    text: 'It Works'
}

transporter.sendMail(mailOptions, (error, data) => {
    if (error) {
       console.log(error)
    }
    console.log(`email sent ${data}`)
})
exports.sendEmail = function(req, res, next) {

}