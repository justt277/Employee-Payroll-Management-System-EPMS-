import SalarySchema from "../Schemas/SalaryModel.js";

//create salary
const createSalary = async (req, res) => {
    try {
        const { employee, department , GrossSalary, TotalDeduction,  month } = req.body;

        const NetSalary = Number(GrossSalary) - Number(TotalDeduction);

        const createSal = await SalarySchema.create({
            employee,
            department,
            GrossSalary,
            TotalDeduction,
            NetSalary,
            month
        });
        res.status(200).json(createSal);
    }
    catch (error) {
        res.status(500).json({ message: "Error creating salary", error: error.message });
    }
}

//get all salaries
const getSalaries = async (req, res ) => {
    try {
        const getSals = await SalarySchema.find()
         .populate("employee")
         .populate("department");
        res.status(200).json(getSals);
    }
    catch (error ) {
        res.status(500).json({ message: "Error fetching salaries", error: error.message });
    }
}

//get a single salary
const getSalary = async (req , res) => {
    try {
        const { _id } = req.params;
        const getSal = await SalarySchema.findById(_id);
        if (!getSal) {
            return res.status(404).json({ message: "Salary not found for the specified month" });
        }
        res.status(200).json(getSal);
    }
    catch (error ) {
        res.status(500).json({ message: "Error fetching salary", error: error.message });
    }
}

//update salary
const updateSalary = async (req, res) => {
    try {
        const { _id } = req.params;
        const { GrossSalary, TotalDeduction, month } = req.body;
        const updateSal = await SalarySchema.findByIdAndUpdate(
            _id,
            { GrossSalary, TotalDeduction, month },
            { new: true }
        );
        if (!updateSal) {
            return res.status(404).json({ message: "Salary not found for the specified id" });
        }
        res.status(200).json(updateSal);
    }

    catch (error) {
        res.status(500).json({ message: "Error updating salary", error: error.message });
    }
}


//delete salary
const deleteSalary = async (req , res ) => {
    try {
        const { _id } = req.params;
        const deleteSal = await SalarySchema.findByIdAndDelete(_id);
        if (!deleteSal) {
            return res.status(404).json({ message: "Salary not found for the specified month" });
        }
        res.status(200).json({ message: "Salary deleted successfully" });
    }

    catch (error) {
        res.status(500).json({ message: "Error deleting salary", error: error.message });
    }
}

export { createSalary, getSalaries, getSalary, updateSalary, deleteSalary };