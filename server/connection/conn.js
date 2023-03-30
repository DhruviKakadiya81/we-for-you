const mongoose = require("mongoose");

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017/weForYou", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => { console.log("connection is successful"); })
    .catch((err) => { console.log(err+" connection is failure") });