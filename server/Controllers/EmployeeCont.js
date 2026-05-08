import mongoose from "mongoose";
import EmployeeSchema from "../Schemas/EmployeeModel.js";

const addEmployee = async (req, res) => {
    try {
        const { employeeNumber, FirstName, LastName, Position, Address, Telephone, Gender, hiredDate } = req.body;
        const addEmploy = await EmployeeSchema.create({ 
            employeeNumber,
            FirstName,
            LastName,
            Position,   
            Address,
            Telephone,
            Gender,
            hiredDate
        });
        res.status(200).json(addEmploy);
    } catch (error) {
        res.status(500).json({ message: "Error adding employee", error });
    }
}

// get all employees
const getEmployees = async (req, res) => {
    try {
        const getEmploy = await EmployeeSchema.find();
        res.status(200).json(getEmploy);
    } catch ( error ) {
        res.status(500).json({ message: "Error fetching employees", error });
    }
}

//get a single employee by employee number
const getEmployee = async (req, res) => {
   try {
    const { _id } = req.params;
    const getEmploy = await EmployeeSchema.findById(_id);
    if (!getEmploy) {
        return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json(getEmploy);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching employee", error });
    }
}

// update employee details
const updateEmployee = async (req, res) => {
    try {
        const { _id } = req.params;
        const { FirstName, LastName, Position, Address, Telephone, Gender, hiredDate } = req.body;
        const updateEmploy = await EmployeeSchema.findByIdAndUpdate(_id, {
            FirstName,
            LastName,
            Position,
            Address,
            Telephone,
            Gender,
            hiredDate }, { new: true});
        if (!updateEmploy) {
            return res.status(404).json({ message: "Employee not found" });
        }
        res.status(200).json(updateEmploy);
    }
    catch (error) {
        res.status(500).json({ message: "Error updating employee", error });
    }
}

// delete an employee

const deleteEmployee = async (req, res) => {
    try {
        const { _id } = req.params;
        const deleteEmploy = await EmployeeSchema.findByIdAndDelete(_id);
        if(!deleteEmploy) {
            return res.status(404).json({ message: "Employee not found" });
        }
        res.status(200).json({ message: "Employee deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Error deleting employee", error });
    }
}

export { addEmployee, getEmployees, getEmployee, updateEmployee, deleteEmployee };