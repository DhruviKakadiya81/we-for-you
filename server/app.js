const express = require("express");
const port = process.env.PORT || 4000;
const app = express();
var cors = require('cors')
require("./connection/conn");
const route = require("./routes/routes");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static('./public'));
app.use("/",route);
app.get("/",(req,res)=>{
    let = req.body;
    res.send("hello this is me");
})
app.listen(port,()=>{
 console.log("listning to the port no 4000");
});

