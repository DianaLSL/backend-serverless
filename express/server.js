
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');


const app = express();

const router = express.Router();
router.get('/', (req,res) => res.send({"message": "hi there!"}))

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);

module.exports = app;
module.exports.handler = serverless(app);
