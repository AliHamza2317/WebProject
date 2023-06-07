import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode"; 
const Navbar = () => {
  const navigate = useNavigate();
  let token=localStorage.getItem('token')
  const decodedToken = jwt_decode(token);
  const role=decodedToken.role
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/login");
  };

  return (
    <>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Epic Adventures</h1>
        <ul className="nav-menu">
          <li>
            <Link className="nav-links" to="/viewtour">
              <i className="fa-solid fa-eye"></i> View
            </Link>
          </li>

          {role === 'touragent' && ( // Render the following icons only for tour agents
            <>
              <li>
                <Link className="nav-links" to="/addtour">
                  <i className="fa-sharp fa-solid fa-plus"></i> Add
                </Link>
              </li>
              <li>
                <Link className="nav-links" to="/updatetour">
                  <i className="fa-solid fa-pen-to-square"></i> Update
                </Link>
              </li>
              <li>
                <Link className="nav-links" to="/deletetour">
                  <i className="fa-solid fa-trash"></i> Delete
                </Link>
              </li>

              <li>
                <Link className="nav-links" to="/bookings">
                  <i className="fas fa-calendar-check"></i> My Bookings
                </Link>
              </li>

            </>
          )}

          {role === 'customer' && ( // Render the following icons only for customers
            <>
              <li>
                <Link className="nav-links" to="/viewbookings">
                  <i className="fas fa-calendar-check"></i> My Bookings
                </Link>
              </li>
            </>
          )}

          <li>
            <button className="nav-btn" onClick={handleLogout}>
              Log Out
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
