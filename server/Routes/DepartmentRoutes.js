import { createDepartment, getDepartments, getDepartment, updateDepartment, deleteDepartment } from "../Controllers/DepartmentCont.js";
import express from "express";
//route for department
const departmentRouter = express.Router()

departmentRouter.post('/add', createDepartment);
departmentRouter.get('/get', getDepartments);
departmentRouter.get('/get/:_id', getDepartment);
departmentRouter.put('/update/:_id', updateDepartment);
departmentRouter.delete('/delete/:_id', deleteDepartment);

export default departmentRouter;