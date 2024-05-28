const express = require("express");
const db =  require("./db/config");


const app = express();



app.get("/", (req,res)=> {
    res.send("Hello there! Api is working")
})

// app.listen(PORT, () => console.log(`Sever is running port ${PORT} ...`));

module.exports =  app;