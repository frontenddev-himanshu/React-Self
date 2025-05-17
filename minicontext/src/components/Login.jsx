import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUserame] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handelSubmit = (e) => {
    e.preventDefault()
    setUser(username, password)
  };

  return (
    <>
      <div className="flex flex-col">
        <h2 className="text-2xl">Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUserame(e.target.value)}
          className="mt-5 bg-gray-300 outline-0 text-[#000] placeholder:text-[#000] p-2"
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-5 bg-gray-300 outline-0 text-[#000] placeholder:text-[#000] p-2"
        />
        <button className="mt-5 bg-gray-300 outline-0 text-[#000] placeholder:text-[#000] p-2 cursor-pointer"onClick={handelSubmit}>Submit</button>
      </div>
    </>
  );
};

export default Login;
