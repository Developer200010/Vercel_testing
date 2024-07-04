import express from "express";
import dotenv from "dotenv"

dotenv.config();

const app = express();

app.get("/",(req,res)=>{
    res.send("it working fine");
});

app.listen(process.env.PORT || 5000,()=>{
    console.log("port is running in 3000");
})