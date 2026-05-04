import mongoose from "mongoose";

//this is the schema for department details, it includes department code, department name and gross salary for that department
const DepartmentSchema = new mongoose.Schema({
    DepartmentCode : { type: String , required: true , unique: true },
    DepartmentName : { type: String , required: true },
    GrossSalary : { type: Number , required: true },
}, { timestamps: true });

export default mongoose.model("Department", DepartmentSchema);