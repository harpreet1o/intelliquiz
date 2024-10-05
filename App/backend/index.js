import express from "express";
import cors from "cors";
import logger from "morgan";
import indexRouter from "./routes/gptapi.js"
import auth from "./routes/auth.js";
import 'dotenv/config';
import sql from "mssql";

const app=express();
app.use(cors());
app.use(express.json());
app.use(logger("dev"));

const dbConfig = {
    user: process.env.databaseUser,
    password: process.env.databasePassword,
    server: process.env.databaseServer,
    database: process.env.databaseName,
    options: {
      encrypt: true, // for Azure SQL Database
      trustServerCertificate: process.env.databaseTrustServerCertificate === 'false',
    },
    connectionTimeout: parseInt(process.env.databaseConnectionTimeout, 10)
  };
  
  // Connect to the database
  sql.connect(dbConfig).then(pool => {
    if (pool.connected) {
      console.log('Connected to Azure SQL Database');
    }
  }).catch(err => {
    console.error('Database connection failed: ', err);
  });
app.get("/",(req,res)=>{
res.json("hello from the server side");
})
app.use("/",indexRouter);
app.use("/",auth)

app.listen(3000,()=>{
    console.log("server started");
})