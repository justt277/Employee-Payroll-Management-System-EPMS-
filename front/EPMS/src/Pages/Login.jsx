import { useState } from "react";
import { login } from "../Api/AuthApi.js";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const res = await login(form);
      localStorage.setItem("token", res.data.message);

      navigate("/dashboard", { replace: true });
    } catch (error) {
      console.log(error);
      alert("Login Failed");
    }
  };

  return (
    <div className="h-screen w-400 flex items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-black">

      {/* 🌫️ LOGIN CARD */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white/10 backdrop-blur-lg border border-white/20 text-white p-8 rounded-2xl shadow-2xl space-y-5"
      >

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-center">
          🔐 Login
        </h2>

        <p className="text-center text-gray-300 text-sm">
          Welcome back to EPMS
        </p>

        {/* USERNAME */}
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={(e) =>
            setForm({ ...form, username: e.target.value })
          }
          className="w-full p-3 rounded-lg bg-white/10 border border-white/20 outline-none focus:border-blue-500"
        />

        {/* PASSWORD */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
          className="w-full p-3 rounded-lg bg-white/10 border border-white/20 outline-none focus:border-blue-500"
        />

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-lg font-semibold shadow-lg"
        >
          Login 🚀
        </button>

        {/* SIGNUP LINK */}
        <p className="text-sm text-center text-gray-300">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-400 hover:underline"
          >
            Sign Up
          </Link>
        </p>

      </form>
    </div>
  );
}

export default Login;