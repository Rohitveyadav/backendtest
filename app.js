const express = require("express");


const app = express();



app.get("/", (req,res)=> {
    res.send("Hello there! Api is working")
})

// app.listen(PORT, () => console.log(`Sever is running port ${PORT} ...`));

module.exports =  app;