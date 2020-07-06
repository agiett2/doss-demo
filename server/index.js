const express = require('express');
const app = express();
const controller = require('./controller');
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.listen(3000, () => console.log("Server has started on port 3000!"));
app.get('/', (req, res) => {
    res.send(
      "<h1 style='text-align: center'>Welcome to DOSS API </h1>"
    );
  });
app.post('/createCharge', controller.createCharge);
app.post('/sendEmail', controller.sendEmail);
