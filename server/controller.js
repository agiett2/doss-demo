const { createExportDeclaration } = require('typescript');

const stripe = require('stripe')('sk_test_T5aAOVR2ezxquRmSRDbQIiDN');
exports.create = function(req, res, next) {
    console.log(req.body)
    const stripeToken = req.body.token;
    const price = req.body.price;
    const priceInCents = price *100;
    const email = req.body.email;
    return stripe.charges.create({
        amount: priceInCents,
        currency: 'usd',
        source: stripeToken,
        capture: false,
        receipt_email: email,

    }).then(resposne => {
        // success
        console.log('success');
        console.log(resposne);
        res.send(resposne);
    }).catch(error => {
        //error
        console.log('error');
        console.log(error);
    res.send(error);
    });
    
}

// function makeOrderCreation(req, res, next, charge) {
//     return createOrder(req, res, next).then(order => {
//        res.status(200).json(order).end();
//        // we will capture the charge here
//     }).catch((err) => {
//  // we will refund the charge here
// }
// })
