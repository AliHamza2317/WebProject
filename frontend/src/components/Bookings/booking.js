import React, { useState } from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Footer from "../Footer";
import Navbar from "../TourManagement/Navbar";
import { useParams } from "react-router-dom";
import jwt_decode from "jwt-decode"; 

function AddBooking() {
  const { id } = useParams();  
  const [booking_id, setbooking_id] = useState("");
  const [customer_phone, setcustomer_phone] = useState("");
  const [numberOfpeople, setnumberOfpeople] = useState("");
  const [booking_date, setbooking_date] = useState(null);
 
  let token=localStorage.getItem('token')
  const decodedToken = jwt_decode(token);
  const user_id=decodedToken.id;
  const customerName = decodedToken.username;
  const customerEmail = decodedToken.email;

  console.log(customerName)
  console.log(customerEmail)
  console.log(user_id)

  const Add = () => {
    axios
      .post(`http://localhost:3001/tour/bookings/${id}`, {
        booking_id,
        user_id:user_id,
        customer_name: customerName,
        customer_email: customerEmail,
        customer_phone,
        numberOfpeople,
        booking_date
      },
      {
        headers: {
           'token': token
        }
      })
      .then((response) => {
        console.log(response);
        const result = response.data;
        const { status, message } = result;
        if (status === "SUCCESS") {
          alert(message, status);
        } else {
          alert(message);
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  
  

  return (
    <>
    <Navbar/>
      <section className="vh-300">
        <div className="container  " id="cont">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong" id="card">
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">ADD TOUR</h3>

                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter a Booking ID"
                      value={booking_id}
                      onChange={(e) => setbooking_id(e.target.value)}
                    />
                  </div>

                  {/* <div className="form-outline mb-4">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter a Customer ID"
                      value={customer_id}
                      onChange={(e) => setcustomer_id(e.target.value)}
                    />
                  </div> */}

                  {/* <div className="form-outline mb-4">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter your Name"
                      value={customer_name}
                      onChange={(e) => setcustomer_name(e.target.value)}
                    />
                  </div> */}

                  {/* <div className="form-outline mb-4">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter your Email"
                      value={customer_email}
                      onChange={(e) => setcustomer_email(e.target.value)}
                    />
                  </div> */}

                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter your customer_phone Number"
                      value={customer_phone}
                      onChange={(e) => setcustomer_phone(e.target.value)}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter a numberOfpeople"
                      value={numberOfpeople}
                      onChange={(e) => setnumberOfpeople(e.target.value)}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      placeholder="Enter a Booking Date"
                      value={booking_date}
                      onChange={(e) => setbooking_date(e.target.value)}
                    />
                  </div>

                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                    onClick={Add}
                  >
                    Add Booking
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default AddBooking;

