import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("token", "loggedin");
      navigate("/dashboard");
    } else {
      setUsername("");
      setPassword("");
      alert("Incorrect Username or Password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-xl p-10 w-96">

        <h1 className="text-3xl font-bold text-center mb-8">
          Apex Tuitions Login
        </h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border w-full p-3 rounded mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border w-full p-3 rounded mb-6"
        />

        <button
          onClick={handleLogin}
          className="bg-blue-700 text-white w-full p-3 rounded hover:bg-blue-800"
        >
          Login
        </button>



      </div>
    </div>
  );
}

export default Login;