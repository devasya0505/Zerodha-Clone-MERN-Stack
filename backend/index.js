require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const uri = process.env.MONGO_URL;

const app = express(); //create a new application

app.listen(3001, () => {
  console.log("App Started"); //port=3001, because 3000 is in use
  mongoose.connect(uri);
  console.log("DB Connected");
});
