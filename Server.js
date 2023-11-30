import express from "express";
import dotenv from "dotenv";
import router from "./Router.js";
import connection from "./Connection.js";
import cors from 'cors';
dotenv.config();
const app=express();
app.use(cors())
app.use(express.json({limit:"20mb"}));
app.use("/EmployeesDetails",router);
connection().then(()=>{
    app.listen(process.env.PORT,()=>{
    console.log("SERVER STARTED",process.env.PORT);
})})
.catch(()=>{
    console.log("DATA BASE NOT CONNECTED");
})