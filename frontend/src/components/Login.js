import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const checkLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/user/login", {
        username,
        password,
      })
      .then((response) => {

        console.log(response)
        const result = response.data;
        const { status, message } = result;
        if(status=="SUCCESS")
        {
        alert(message,status)  
        
        }
        else{
          alert(message,status)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            className="form-control"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
          />
        </div>
        <button
          type="submit"
          onClick={checkLogin}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Login;
