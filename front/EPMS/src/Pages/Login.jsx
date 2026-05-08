import { useState } from "react";
import { login } from "../Api/AuthApi.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Login () {
    const [form , setForm] = useState({ username: "", password: ""});
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        try {
        e.preventDefault();
       const res =  await login(form);
       console.log(res.data)
        localStorage.setItem("token", res.data.message);
        navigate('/dashboard', { replace: true });
        } catch (error) {
            console.log(error);
            alert("Login Failed")
        }
    }

    const handleUsername = (e) => {
        setForm({...form, username: e.target.value});
    }
    const handlePassword = (e) => {
        setForm({...form, password: e.target.value});
    }

    return (
        <div className="h-screen w-3xl flex items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow w-80">
                <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

                <input type="text" name="username" placeholder="username" onChange={handleUsername} className="w-50 p-2 border mb-3 rounded"/> {" "}
                <input type="password" name="password" placeholder="password" onChange={handlePassword} className="w-50 p-2 border mb-3 rounded"/> 

                <button className="w-20 p-2 bg-yellow-500 hover:bg-amber-500 text-white rounded">Login</button> 
                <p className="text-sm mt-3 text-center">
                    Don't have an account?{" "}
                    <Link to="/SignUp" className="text-blue-500">Sign Up</Link>
                </p>
            </form>
        </div>
    )
}

export default Login;