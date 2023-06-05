import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



const Navbar=()=>{
    const navigate=useNavigate()


    const handlelogout=()=>{
        
        localStorage.removeItem('token')
        navigate("/login")
    }
    return(
        <>
             <nav className="NavbarItems">
        <h1 className="navbar-logo">Epic Adventures</h1>
        <ul className="nav-menu">
          <li>
            {" "}
            
            <Link className="nav-links" to="/viewtour"> <i className="fa-solid fa-eye"></i> View</Link>
          </li>
          <li>
            {" "}
            
            <Link className="nav-links"  to="/addtour"> <i className="fa-sharp fa-solid fa-plus" ></i> Add</Link>
          </li>

          <li>
            {" "}
           
            <Link className="nav-links"  to="/updatetour">  <i className="fa-solid fa-pen-to-square" ></i> Update</Link>
          </li>

          <li>
            {" "}
            
            <Link className="nav-links"  to="/deletetour"> <i className="fa-solid fa-trash"></i> Delete</Link>
          </li>
          <li>
            <button className="nav-btn" onClick={handlelogout}> LogOut</button>
          </li>

        </ul>
      </nav>
        </>
    )
}


export default Navbar