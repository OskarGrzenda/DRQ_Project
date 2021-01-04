const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');


//to use cors everytime
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
//parse application/json
app.use(bodyParser.json())

//connection to mongo
const myConnectionString = 'mongodb+srv://admin:collegepass@cluster0.kebqv.mongodb.net/phones?retryWrites=true&w=majority';
mongoose.connect(myConnectionString, { useNewUrlParser: true });
const Schema = mongoose.Schema;
var phoneSchema = new Schema({
    phonename: String,
    picture: String
});
//refer to PhoneModel to interact with database
var PhoneModel = mongoose.model("phone", phoneSchema);

app.get('/api/phones', (req, res) => {

    PhoneModel.find((err, data) => {
        res.json(data);
    })

})

//find the phone by ID
app.get('/api/phones/:id', (req, res) => {
    console.log(req.params.id);

    PhoneModel.findById(req.params.id, (err, data) => {
        res.json(data);
    })
})

//deletes movie and sends back data once its deleted
app.delete('/api/phones/:id', (req, res) => {
    console.log("Delete Phone: " + req.params.id);

    PhoneModel.findByIdAndDelete(req.params.id, (err, data) => {
        res.send(data);
    })
})

app.put('/api/phones/:id', (req, res) => {
    console.log("Update Tech: " + req.params.id);
    console.log(req.body);

    PhoneModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (err, data) => {
            res.send(data);
        })
})


app.post('/api/phones', (req, res) => {
    console.log('Phone Received');
    console.log(req.body.phonename);
    console.log(req.body.picture);

    PhoneModel.create({
        phonename: req.body.phonename,
        picture: req.body.picture
    })
    res.send('Item Added');
})





app.listen(port, () => {
    console.log('Example app listening http://@localhost:${port}')
})