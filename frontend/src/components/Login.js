import React, { useState } from "react";
import axios from "axios";
import "../index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate=useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const checkLogin = (e) => {
    e.preventDefault();
    const isEmail = username.includes("@");
  
    axios
      .post("http://localhost:3001/user/login", {
        [isEmail ? "email" : "username"]: username,
        password,
      })
      .then((response) => {
        console.log(response);
        const result = response.data;
        const { status, message, role } = result;
  
        console.log("Status:", status);
        console.log("Message:", message);
        console.log("Role:", role);
  
        if (status === "SUCCESS") {
          alert(message, status);
          localStorage.setItem("token", response.data.token);
  
          if (role === "touragent") {
            console.log("Navigating to homescreen");
            navigate("/viewtour");
          }

          else if (role === "customer") {
            console.log("Navigating to homescreen");
            navigate("/viewtour");
          }
          
          else {
            console.log("Navigating to customerscreen");
            navigate("/customer");
          }
        } else {
          alert(message, status);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

  return(
    <>
<section className="vh-100" >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" id="card">
          <div className="card-body p-5 text-center">

            <h3 className="mb-5">Sign in</h3>

            <div className="form-outline mb-4">
              <input type="text" id="username" className="form-control form-control-lg" value={username} placeholder="Email or Username" onChange={(e)=> setUsername(e.target.value)} />
              
            </div>

            <div className="form-outline mb-4">
              <input type="text" id="password" className="form-control form-control-lg" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
              
            </div>

          
            <div className="form-check d-flex justify-content-start mb-4">
              <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label className="form-check-label" > Remember password </label>
            </div>

            <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={checkLogin} >Login</button>

            <hr className="my-4"/>


          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </>
    )
}

export default Login;
