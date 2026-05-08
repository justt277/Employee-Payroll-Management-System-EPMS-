import mongoose from "mongoose";
//this is the schema for salary details of an employee, it includes gross salary, total deduction, net salary and the month for which the salary is being paid.
const SalarySchema = new mongoose.Schema({
         employee: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Employee",
            required: true
         },
         department: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Department",
            required: true
         },
         GrossSalary: {
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