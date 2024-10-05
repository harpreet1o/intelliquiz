import express from "express";
import 'dotenv/config';
import admin from "../firebase/firebase-config.js";
const router=express.Router();

router.post("/auth",async (req,res)=>{
    console.log(req.body.token);
    if(req.body.token){
    const decodeValue = await admin.auth().verifyIdToken(req.body.token);
    console.log(decodeValue);
    }
})
export default router;