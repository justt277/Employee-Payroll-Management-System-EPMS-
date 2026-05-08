import { createSalary, getSalaries, getSalary, updateSalary, deleteSalary } from "../Controllers/SalaryCont.js";
import express from "express";
//route for salary
const salaryRouter = express.Router();

salaryRouter.post('/add', createSalary);
salaryRouter.get('/get', getSalaries);
salaryRouter.get('/get/:_id', getSalary);
salaryRouter.patch('/update/:_id', updateSalary);
salaryRouter.delete('/delete/:_id', deleteSalary);

export default salaryRouter;