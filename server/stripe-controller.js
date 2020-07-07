const stripe = require("stripe")("sk_test_T5aAOVR2ezxquRmSRDbQIiDN");
const emailService = require("./email-controller");
exports.createCharge = function (req, res, next) {
  console.log(req.body);
  const stripeToken = req.body.token;
  const price = req.body.price;
  const priceInCents = price * 100;
  const email = req.body.billing_details.email;
  return stripe.charges
    .create({
      amount: priceInCents,
      currency: "usd",
      source: stripeToken,
      capture: false,
      receipt_email: email,
    })
    .then((resposne) => {
      // success
      console.log("success");
      console.log(resposne);
      res.send(resposne);
      const mailOptions = {
        body: {
          from: "noreply@askdoss.com",
          to: [`${resposne.receipt_email}`, "noreplydoss@gmail.com"],
          subject: "Payment Confirmation",
          html: `<h1>Thank You For your Payment at WWW.ASKDOSS.COM</h1>
                <p> Paymnet Confirmation Receipt: ${resposne.payment_method_details.card.fingerprint} </p>
                <h3>total: $${price}.00</h3>`,
        },
      };
      emailService.sendEmail(mailOptions);
    })
    .catch((error) => {
      //error
      console.log("error");
      console.log(error);
      res.send(error);
    });
};
