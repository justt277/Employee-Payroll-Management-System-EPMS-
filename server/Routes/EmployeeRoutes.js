import express from "express";
import { addEmployee , getEmployees , getEmployee , updateEmployee , deleteEmployee  } from "../Controllers/EmployeeCont.js";

//route for employee
const employeeRouter = express.Router();


employeeRouter.post('/add', addEmployee);
employeeRouter.get('/get', getEmployees);
employeeRouter.get('/get/:employeeNumber', getEmployee);
employeeRouter.put('/update/:employeeNumber', updateEmployee);
employeeRouter.delete('/delete/:employeeNumber', deleteEmployee);

export default employeeRouter;