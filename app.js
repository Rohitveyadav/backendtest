const express =  require('express');
const app =  express();

app.use('/',(req,res)=>{
    res.send({msg:"hello brother"})
})

app.listen(3000,()=>{
    console.log("server running fine");
})