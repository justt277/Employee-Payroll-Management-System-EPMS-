import mongoose from "mongoose";


const DepartmentSchema = new mongoose.Schema({
    DepartmentCode : { type: String , required: true , unique: true },
    DepartmentName : { type: String , required: true },
    GrossSalary : { type: Number , required: true },
}, { timestamps: true });

export default mongoose.model("Department", DepartmentSchema);