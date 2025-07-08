import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("All fields are required.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/api/login", {
        email, password
      })

      if (res) {
        setMessage("Login successful!");
        localStorage.setItem("id:", res.data.data.id)
      } else {
        setMessage(res.error);
      }
    } catch (err) {
      setMessage("Server error. Please try again.");
      console.error(err);
    }
  };

  return (
    <>
      <div className="container mx-auto p-6 max-w-md bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        {message && (
          <div className="mb-4 text-center text-sm text-red-600">{message}</div>
        )}

        <form onSubmit={handleSubmit}>
          <input
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
