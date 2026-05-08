import api from "./axios.js";

const login = (data) => api.post('/login', data);

const signUp = (data) => api.post("/signup", data)

export { login , signUp };