import express from "express";
import cors from "cors";
import logger from "morgan";
import indexRouter from "./routes/gptapi.js"

const app=express();
app.use(cors());
app.use(express.json());
app.use(logger("dev"));
app.get("/",(req,res)=>{
res.json("hello from the server side");
})
app.use("/",indexRouter);

app.listen(3000,()=>{
    console.log("server started");
})