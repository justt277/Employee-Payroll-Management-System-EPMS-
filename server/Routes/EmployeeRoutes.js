import express from "express";
import { addEmployee , getEmployees , getEmployee , updateEmployee , deleteEmployee  } from "../Controllers/EmployeeCont.js";

//route for employee
const employeeRouter = express.Router();


employeeRouter.post('/add', addEmployee);
employeeRouter.get('/get', getEmployees);
employeeRouter.get('/get/:_id', getEmployee);
employeeRouter.put('/update/:_id', updateEmployee);
employeeRouter.delete('/delete/:_id', deleteEmployee);

export default employeeRouter;