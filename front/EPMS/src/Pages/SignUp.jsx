import { useState } from "react";
import { signUp } from "../Api/AuthApi.js";
import { useNavigate, Link } from "react-router-dom";

function SignUp() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      await signUp(form);

      alert("Registration successful!");
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Registration Failed");
    }
  };

  return (
    <div className="h-screen w-400 flex items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-black">

      {/* 🌫️ SIGNUP CARD */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white/10 backdrop-blur-lg border border-white/20 text-white p-8 rounded-2xl shadow-2xl space-y-5"
      >

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-center">
          🧾 Sign Up
        </h2>

        <p className="text-center text-gray-300 text-sm">
          Create your EPMS account
        </p>

        {/* USERNAME */}
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={(e) =>
            setForm({ ...form, username: e.target.value })
          }
          className="w-full p-3 rounded-lg bg-white/10 border border-white/20 outline-none focus:border-green-500"
          required
        />

        {/* PASSWORD */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
          className="w-full p-3 rounded-lg bg-white/10 border border-white/20 outline-none focus:border-green-500"
          required
        />

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 transition py-3 rounded-lg font-semibold shadow-lg"
        >
          Create Account ✨
        </button>

        {/* LOGIN LINK */}
        <p className="text-sm text-center text-gray-300">
          Already have an account?{" "}
          <Link
            to="/"
            className="text-green-400 hover:underline"
          >
            Login
          </Link>
        </p>

      </form>
    </div>
  );
}

export default SignUp;