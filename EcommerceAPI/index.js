const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:admin1234@cluster0.dcdu2nn.mongodb.net/").
    then(()=>console.log("DB Connected")).catch((err)=>{
        console.log(err);
    });

app.listen(5000, () => {
  console.log("Backend is running!");
});
