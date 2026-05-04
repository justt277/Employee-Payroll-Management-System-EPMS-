import { createDepartment, getDepartments, getDepartment, updateDepartment, deleteDepartment } from "../Controllers/DepartmentCont.js";
import express from "express";
//route for department
const departmentRouter = express.Router()

departmentRouter.post('/add', createDepartment);
departmentRouter.get('/get', getDepartments);
departmentRouter.get('/get/:DepartmentCode', getDepartment);
departmentRouter.put('/update/:DepartmentCode', updateDepartment);
departmentRouter.delete('/delete/:DepartmentCode', deleteDepartment);

export default departmentRouter;