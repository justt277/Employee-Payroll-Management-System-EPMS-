import api from "./axios.js";


const createDepartment = (data) => {
    return api.post('/Department/add', data)};

const getDepartments = () =>{ return api.get('/Department/get'); };


export { createDepartment , getDepartments };