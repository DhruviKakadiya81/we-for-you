const mongoose = require("mongoose");

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://krupa_mavani:krupa_mavani@cluster0.2nt11bc.mongodb.net/we4u", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => { console.log("connection is successful abc"); })
    .catch((err) => { console.log(err+" connection is failure") });