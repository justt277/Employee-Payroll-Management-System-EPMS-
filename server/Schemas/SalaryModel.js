import mongoose from "mongoose";

const SalarySchema = new mongoose.Schema({
         GlossSalary: {
            type: Number,
            required: true},
         TotalDeduction: {
            type: Number,
            required: true},
         NetSalary: {
            type: Number,
            required: true},
         month: {
            type: String,
            required: true}
            
}, {timestamps: true});

export default mongoose.model("Salary", SalarySchema);