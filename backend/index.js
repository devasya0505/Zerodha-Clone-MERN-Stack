const express = require("express");

const app = express(); //create a new application

app.listen(3001, ()=>{
    console.log("App Started"); //port=3001, because 3000 is in use
});