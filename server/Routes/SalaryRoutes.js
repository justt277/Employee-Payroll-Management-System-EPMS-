import { createSalary, getSalaries, getSalary, updateSalary, deleteSalary } from "../Controllers/SalaryCont.js";
import express from "express";
//route for salary
const salaryRouter = express.Router();

salaryRouter.post('/add', createSalary);
salaryRouter.get('/get', getSalaries);
salaryRouter.get('/get/:month', getSalary);
salaryRouter.put('/update/:month', updateSalary);
salaryRouter.delete('/delete/:month', deleteSalary);

export default salaryRouter;