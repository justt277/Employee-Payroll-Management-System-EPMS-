import mongoose from "mongoose";

//this is the schema for employee details, it includes employee number, first name, last name, position, address, telephone
const EmployeeSchema = new mongoose.Schema({
    employeeNumber: { type: Number , required: true , unique: true },
    FirstName: { type: String , required: true },
    LastName: { type: String , required: true },
    Position: { type: String , required: true },
    Address: { type: String , required: true },
    Telephone: { type: Number , required: true },
    Gender: { type: String , required: true },
    hiredDate: { type: Date , default: Date.now }
}, { timestamps: true });

export default mongoose.model("Employee", EmployeeSchema);