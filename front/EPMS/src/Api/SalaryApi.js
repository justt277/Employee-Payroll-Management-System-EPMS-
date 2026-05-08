import api from "./axios.js";

const createSalary = (data) => {
    return api.post('/Salary/add', data)
};

const getSalaries = () => {
    return api.get('/Salary/get')
};

const updateSalary = (_id, data) => {
    return api.patch(`/Salary/update/${_id}`, data)
};

const deleteSalary = (_id) => {
    return api.delete(`/Salary/delete/${_id}`)
};

export { createSalary , getSalaries , updateSalary , deleteSalary };