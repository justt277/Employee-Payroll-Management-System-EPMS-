import { useState } from "react";
import { signUp } from "../Api/AuthApi.js";
import { useNavigate } from "react-router-dom";


function SignUp () {
    const [form , setForm] = useState({ username: "", password: ""});
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            await signUp(form);
            alert("Registration successful! Please login.");
            navigate('/');
        } catch (error) {
            console.log(error);
            alert("Registration Failed")
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
                <h2 className="text-xl font-bold mb-4 text-center">Sign Up</h2>
                <input type="text" name="username" placeholder="username" onChange={handleUsername} className="w-50 p-2 border mb-3 rounded"/> {" "}
                <input type="password" name="password" placeholder="password" onChange={handlePassword} className="w-50 p-2 border mb-3 rounded"/>
                <button className="w-full p-2 bg-green-500 hover:bg-green-600 text-white rounded">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;