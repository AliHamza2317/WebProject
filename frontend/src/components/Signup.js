
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
function Signup()
{
    const navigate = useNavigate();
    const[fullname,setFullname]=useState("")
    const[username,setUsername]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[role,setRole]=useState("")


    const signup = () => {
        axios
          .post("http://localhost:3001/user/signup", {
            name: fullname,
            username: username,
            email: email,
            password: password,
            role: role
          })
          .then((response) => {
            console.log(response);
            const result = response.data;
            const { status, message } = result;
            if (status === "SUCCESS") {
              alert(message, status);
              navigate("/login");
            } else {
              alert(message);
            }
          })
          .catch(function (err) {
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

            <h3 className="mb-5">Sign up</h3>

            <div className="form-outline mb-4">
              <input type="email" className="form-control form-control-lg" placeholder="Full Name"  value={fullname} onChange={(e)=> setFullname(e.target.value)} />
              
            </div>

            <div className="form-outline mb-4">
              <input type="email"  className="form-control form-control-lg" placeholder="Username"  value={username} onChange={(e)=> setUsername(e.target.value)} />
              
            </div>


            <div className="form-outline mb-4">
              <input type="email"  className="form-control form-control-lg" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} />
              
            </div>

            <div className="form-outline mb-4">
              <input type="password"  className="form-control form-control-lg" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} />
              
            </div>

            <div className="form-outline mb-4">
              <input type="email"  className="form-control form-control-lg" placeholder="Role" value={role} onChange={(e)=> setRole(e.target.value)}/>
              
            </div>


            <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={signup} >Login</button>



          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </>
    )
}






export default Signup;