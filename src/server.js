const express = require("express");
const mongoose = require("mongoose");
const a1 = require("./a1");
const cors = require("cors");
const alumni = require("./alumni1");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());


const connection_url =
"mongodb+srv://Parag:<Paragkadb1234>@cluster0.imnch19.mongodb.net/test";

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



app.get("/alumni/get", (req, res) => {
  alumni.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

