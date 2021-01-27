const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const User = require("./api/models/userModel");
const bodyParser = require("body-parser");
const routes = require("./api/routes/userRoutes");

//mongoose instance connection url
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Userdb");

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(function (req, res)  {
    res.status(400).send({url: req.originalUrl + " not found"})
})
routes(app);

app.listen(port);
console.log("server id running on port " + port);


