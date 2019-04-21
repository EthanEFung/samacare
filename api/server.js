require('dotenv').config();
require("@babel/core").transform("code", {
  plugins: ["@babel/plugin-proposal-object-rest-spread"]
});

const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const cors = require('cors');
const router = require('./router');
const fs = require('fs');
var cloudinary = require('cloudinary').v2;
const formData = require('express-form-data');
const db = require('./db/config');


db.authenticate()
  .then(() => console.log('authorized!'))
  .catch(err => console.log('sequelize error', err))

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200,
}));
app.use(formData.parse());
app.use('/', router);


app.listen(port, err => {
  if (err) throw err;
  console.log(`Listening on port ${port}`);
});

