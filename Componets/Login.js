import React from "react";
import { useState, useContext } from "react";
import Usercontext from "../MiniContext/UserContext";

const Login = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(Usercontext);
  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({userName,password})
  };
  return (
    <>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter First Name"
        value={userName}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter the password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Click</button>
    </>
  );
};

export default Login;
