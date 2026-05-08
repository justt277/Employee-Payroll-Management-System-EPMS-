import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import chalk from "chalk";
import employeeRouter from "./Routes/EmployeeRoutes.js";
import departmentRouter from "./Routes/DepartmentRoutes.js";
import salaryRouter from "./Routes/SalaryRoutes.js";
import { login , register } from "./Controllers/Auth.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
//route for employee
app.use('/Employee', employeeRouter)

//route for department
app.use('/Department', departmentRouter);

//route for salary
app.use('/Salary', salaryRouter);

//login
app.post('/login', login);


//register
app.post('/signup', register);

const port = process.env.PORT || 5051;
const mongourl = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/EPMS";

mongoose.connect(mongourl)
  .then(() => {
    app.listen(port, () => {
        console.log(chalk.greenBright(`Server is running 💌 on port ${port} | connected to MongoDb`));
    });
  })
  .catch((err) => {
    console.error(chalk.redBright("Error connecting to MongoDB:"), err);
  })