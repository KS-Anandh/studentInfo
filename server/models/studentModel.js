import mongoose from "mongoose";
const studentShema =mongoose.Schema(
    {
        reg:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        mail:{
            type:String,
            required:true
        },
        fees:{
            type:Number,
            required:true
        }
    }
)
const Student =mongoose.model("students",studentShema);
export default Student;