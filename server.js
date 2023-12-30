const express = require("express");
const cors = require("cors");    
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const Formdata = require("./ROUTER/form");
const Products = require("./Product");


const app = express();
const port = 3001;


app.use(express.json());
app.use(cors());

app.use(bodyParser.json())  
app.use(bodyParser.urlencoded({
  extended: true
}))

const connection_url = "mongodb+srv://girishankar:v.p.shankar@cluster0.v8mpdiy.mongodb.net/mydb?retryWrites=true&w=majority"

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true

}, (err) => {
  if (err) { console.log("error in connection") }
  else { console.log("connected to db") }
});


app.use('/adding', Formdata); // go to router




app.get("/", async (req, res) =>  //'get'the data from db. "/" will deside the path where the res data will store(move)
{
  const data = await Products.find({}).sort({ _id: -1 })
  res.status(200).json(data);  //res data will go(store) to / (http://localhost:3001/)
  console.log("ready");
});

app.get("/agri", async (req, res) => {
  const data = await Products.find({ cat: "AGRICULTURE" })
  res.status(200).json(data);

});

app.get("/software", async (req, res) => {
  const data = await Products.find({ cat: "SOFTWARE" })
  res.status(200).json(data);

});

app.get("/auto", async (req, res) => {
  const data = await Products.find({ cat: "AUTOMOBILE" })
  res.status(200).json(data);

});

app.get("/electrical", async (req, res) => {
  const data = await Products.find({ cat: "ELECTRICAL" })
  res.status(200).json(data);

});

app.get("/recycling", async (req, res) => {
  const data = await Products.find({ cat: "RECYCLING" })
  res.status(200).json(data);

});



app.listen(port, () => console.log("listening on  the port", port));
