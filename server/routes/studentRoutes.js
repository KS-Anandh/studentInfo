import express from 'express'
import Student from '../models/studentModel.js'

const studentRoute = express.Router();
studentRoute.get("/list", async (req, res) => {
    try {
        const students = await Student.find({})
        res.status(200).json(students)
    }
    catch { res.status(500).json("Get Method Error..") }
})

studentRoute.get("/list/:id", async (req, res) => {
    const id=req.params.id
    try {
        const students = await Student.find({})
        const update=students.filter((item)=>{
         
            return item._id==id
        })
        res.status(200).json(update)
    }
    catch { res.status(500).json("Get Method Error..") }
})

studentRoute.post("/add", async (req, res) => {
    const { reg, mail} = req.body;
    const exist_1 = await Student.findOne({ reg: reg })
    const exist_2 = await Student.findOne({ mail: mail })
    try {
        if (exist_1 || exist_2) {
            if (exist_1) {
                return res.status(401).json("Reg Already Exist..")
            }
            else {
                return res.status(401).json("Mail Already Exist..")
            }
        }
        else {
            const students = new Student(req.body)
            await students.save()
            return res.status(200).json("Student Added Successfully..")
        }
    }
    catch { res.status(500).json("Post Method Error..") }
})
studentRoute.put("/edit/:id", async (req, res) => {
    const edit_id = req.params.id
    try {
        const status = await Student.findByIdAndUpdate(edit_id, req.body)
        if (status) {
            return res.status(200).json("Student Data Upadted Successfuly...")
        }
        else {
            return res.status(401).json("Something Went Wrong..")
        }
    }
    catch {
        return res.status(500).json("Update Method Error..")
    }
})
studentRoute.delete("/delete/:id", async (req, res) => {
    const edit_id = req.params.id
    try {
        const status = await Student.findByIdAndDelete(edit_id)
        if (status) {
            return res.status(200).json("Student Data Deleted Successfuly...")
        }
        else {
            return res.status(401).json("Something Went Wrong..")
        }
    }
    catch {
        return res.status(500).json("Update Method Error..")
    }
})

export default studentRoute;
