import DepartmentSchema from "../Schemas/DepartmentModel.js";



//create a department
const createDepartment = async (req, res) => {
    try {
    const { DepartmentCode, DepartmentName, GrossSalary } = req.body;
    const addDepart = await DepartmentSchema.create ({
        DepartmentCode,
        DepartmentName,
        GrossSalary
    })
    res.status(200).json(addDepart);
    }catch (error) {
        res.status(500).json({message: "Error creating department", error: error.message});
     }
}

//get all departments
const getDepartments = async (req, res ) => {
    try {
        const getDepart = await DepartmentSchema.find();
        res.status(200).json(getDepart);
    }
    catch (error) {
        res.status(500).json({message: "Error fetching departments", error: error.message});
    }
}

//geta single department
const getDepartment = async (req, res) => {
    try {
        const { _id} = req.params;
        const getDepart = await DepartmentSchema.findById(_id);
        if (!getDepart) {
            return res.status(404).json({ message: "Department not found" });
        }
        res.status(200).json(getDepart);
    }
    catch (error) {
        res.status(500).json({message: "Error fetching department", error: error.message});
    }
}

//update a department
const updateDepartment = async (req, res) => {
    try {
        const { _id } = req.params;
        const { DepartmentName, GrossSalary } = req.body;
        const updateDepart = await DepartmentSchema.findByIdAndUpdate(_id, { DepartmentName , GrossSalary}, { new: true});
        res.status(200).json(updateDepart);

    }
    catch (error) {
        res.status(500).json({message: "Error updating department", error: error.message});
    }
}

//delete a department
const deleteDepartment = async (req, res) => {
    try {
        const { _id } = req.params;
        const deleteDepart = await DepartmentSchema.findByIdAndDelete(_id);
        if (!deleteDepart) {
            return res.status(404).json({ message: "Department not found" });
        }
        res.status(200).json({ message: "Department deleted successfully" });
    }
    catch (error) {
        res.status(500).json({message: "Error deleting department", error: error.message});
    }
}

export { createDepartment, getDepartments, getDepartment, updateDepartment, deleteDepartment };