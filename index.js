// console.log("job");

const express=require('express');

const mongoose=require('mongoose')

const jobRoutes=require("./routes/job");
const app =express();
//for connect the moongoose

mongoose
// .connect("mongodb://127.0.0.1:27017/jobapp")
.connect("mongodb+srv://nipunmadan0607:Nipun%400505@cluster0.5o41srf.mongodb.net/jobapp")
// .connect("mongodb+srv://trans:trans@cluster0.3gzaffk.mongodb.net/nipun")
.then(()=>{
    console.log("Database coonected successfully");
})
.catch((err)=>{
    console.log("Database connnection failled",err);
})

app.use(express.json());//parse the incoming requests

app.use("/api/v1/job/",jobRoutes)
app.listen(10000,()=>{
    console.log("Server is running on port")
})