const express=require("express");
const cors=require("cors");
require('dotenv').config();
const connect  = require("./config/db");
const jobPostRouter=require("./Router/JobPosting.router")

//..................................
const app=express();
app.use(cors());
app.use(express.json());

//..................................
app.use("/",jobPostRouter)


//..................................
app.get("/",(req,res)=>{
    res.status(200).send("Home Page")
})

//..................................


const PORT=process.env.PORT||8080;
app.listen(PORT,async()=>{
       try{
           await connect;
           console.log("Server connected to db");
       }catch(error){
         console.log(error)
       }

       console.log(`Server listen at http://localhost:${PORT}/`);
})

