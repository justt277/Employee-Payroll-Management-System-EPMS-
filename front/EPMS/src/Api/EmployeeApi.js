import api from "./axios.js";


const createEmployee = (data) => {
    return api.post('/Employee/add', data)
};

const getEmployees = () => {
    return api.get('/Employee/get');
};

export { createEmployee , getEmployees };