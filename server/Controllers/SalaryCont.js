import SalarySchema from "../Schemas/SalaryModel.js";

//create salary
const createSalary = async (req, res) => {
    try {
        const { GlossSalary, TotalDeduction, NetSalary, month } = req.body;

        const createSal = await SalarySchema.create({
            GlossSalary,
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
        const getSals = await SalarySchema.find();
        res.status(200).json(getSalies);
    }
    catch (error ) {
        res.status(500).json({ message: "Error fetching salaries", error: error.message });
    }
}

//get a single salary
const getSalary = async (req , res) => {
    try {
        const { month } = req.params;
        const getSal = await SalarySchema.findOne({month});
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
        const { month } = req.params;
        const { GlossSalary, TotalDeduction, NetSalary } = req.body;
        const updateSal = await SalarySchema.findOneAndUpdate(
            { month },
            { GlossSalary, TotalDeduction, NetSalary },
            { new: true }
        );
        if (!updateSal) {
            return res.status(404).json({ message: "Salary not found for the specified month" });
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
        const { month } = req.params;
        const deleteSal = await SalarySchema.findOneAndDelete({ month });
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