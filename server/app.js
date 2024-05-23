import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import studentRoute from './routes/studentRoutes.js'
const app=express()
app.use(cors())
app.use(express.json(
    {
        origin:["https://deploy-mern-1whq.vercel.app"],
        methods:["POST","GET","PUT","DELETE"],
        credentials:true
    }
));
app.use("/student",studentRoute)
mongoose.connect("mongodb+srv://KS-Anandh:Nandha1432@cluster0.4rkke6i.mongodb.net/studentInfo?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Database Connected...")
    app.listen(7000,(req,res)=>{
        console.log("the Server Is Running in Port :7000")
    })
})
.catch((err)=>{
    console.log("the database not Connected..")
})
