
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
function Signup()
{
    
    const[fullname,setFullname]=useState("")
    const[username,setUsername]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[role,setRole]=useState("")
    const [repeatPassword, setRepeatPassword] = useState("");
    const navigate=useNavigate()

    const signup = () => {
      
      if (password !== repeatPassword) {
        alert("Passwords do not match");
        return;
      }
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
              navigate("/");
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
<section class="vh-100">
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" >
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form class="mx-1 mx-md-4">

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" class="form-control" value={fullname} onChange={(e)=>setFullname(e.target.value)} />
                      <label class="form-label" for="form3Example1c" >Your Name</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" class="form-control" value={username} onChange={(e)=>setUsername(e.target.value)} />
                      <label class="form-label" for="form3Example1c" >Your UserName</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" class="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} />
                      <label class="form-label" for="form3Example3c" >Your Email</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" class="form-control" value={role} onChange={(e)=>setRole(e.target.value)} />
                      <label class="form-label" for="form3Example1c" >Your Role</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" class="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} />
                      <label class="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>

                                  <div class="d-flex flex-row align-items-center mb-4">
                  <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                  <div class="form-outline flex-fill mb-0">
                    <input
                      type="password"
                      id="form3Example4cd"
                      class="form-control"
                      value={repeatPassword}
                      onChange={(e) => setRepeatPassword(e.target.value)}
                    />
                    <label class="form-label" for="form3Example4cd">
                      Repeat your password
                    </label>
                  </div>
                </div>


                  

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" class="btn btn-primary btn-lg" onClick={signup}>Register</button>
                  </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  class="img-fluid" alt="Sample image"/>

              </div>
            </div>
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