const express = require("express");
const app= new express();

app.get('',(req,res)=>{
    res.send("Hello World")
})
const port = process.env.port || 3000;
app.listen(port,()=>{
    console.log(`Server started on ${port}`)
});