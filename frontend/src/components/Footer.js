import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../index.css"
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer=()=>{

    return(
        <>
 
<footer className="bg-dark text-center text-white" >

  <div className="container p-4">
  
    <section className="mb-4">

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-facebook-f"></i></a>

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-twitter"></i></a>

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-google"></i></a>

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-instagram"></i></a>

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-linkedin-in"></i></a>

      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-github"></i></a>
    </section>
  
    <section  id="footer">
    <h1>Epic Adventures</h1>
      <p> Choose your favourite destinations.
      </p>
    </section>
   
    <section className="bottom">
     
      <div className="row">
     
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Project</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Status</a>
            </li>
            <li>
              <a href="#!" className="text-white">License</a>
            </li>
            <li>
              <a href="#!" className="text-white">All Versions</a>
            </li>
            
          </ul>
        </div>
        
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Community</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Github</a>
            </li>
            <li>
              <a href="#!" className="text-white">LinkedIn</a>
            </li>
            <li>
              <a href="#!" className="text-white">Twitter</a>
            </li>
            
          </ul>
        </div>
       
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Help</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Support</a>
            </li>
            <li>
              <a href="#!" className="text-white">Troubleshooting</a>
            </li>
            <li>
              <a href="#!" className="text-white">Contact Us</a>
            </li>
            
          </ul>
        </div>
        
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Others</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Terms of Service</a>
            </li>
            <li>
              <a href="#!" className="text-white">Privacy Policy</a>
            </li>
            <li>
              <a href="#!" className="text-white">License</a>
            </li>
           
          </ul>
        </div>
       
      </div>
      
    </section>
    
  </div>

  <div className="text-center p-3" id="footer" >
    © 2020 Copyright:
    <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
 
</footer>

    </>
    )
}


export default Footer