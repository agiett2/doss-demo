// const express = require('express');
// const app = express();
// const stripeController = require('./stripe-controller');
// const emailController = require('./email-controller');
// const cors = require("cors");
// const bodyParser = require("body-parser");
// var router = app.Router();
// app.use(cors({ origin: "*" }));
// app.use(bodyParser.json());
// app.use('/api', router);
// app.listen(3000, () => console.log("Server has started on port 3000!"));
// app.get('/', (req, res) => {
//     res.send(
//       "<h1 style='text-align: center'>Welcome to DOSS API </h1>"
//     );
//   });


// router.post('/createCharge', stripeController.createCharge);
// router.post('/sendEmail', emailController.sendEmail);

const express = require('express');
const app = express();
const stripeController = require('./stripe-controller');
const emailController = require('./email-controller');
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
var router = app.Router();
app.use('/api', router);
router.post('/createCharge', stripeController.createCharge);
router.post('/sendEmail', emailController.sendEmail);

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Welcome to DOSS API !');
  res.end();
}).listen();

