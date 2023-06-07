import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./style2.css"
import { Link } from 'react-router-dom';


const ViewBooking = () => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios
      .get('http://localhost:3001/tour/viewbookings', {
        headers: {
          token: token,
        },
      })
      .then(function (response) {
        console.log(response);
        setData(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []); // Include 'token' as a dependency to re-fetch data when token changes


  return (
    <>
      <div className="main">
        <h1>{data.length} Bookings</h1>
        <div className="center">
          {data.map((element) => (
            <div className="first" key={element._id}>
              <h3 className="second">{element.customer_name}</h3>
              <div className="third"> <label> Email:</label>{element.customer_email}</div>
              <div className="fifth"><label> Contact Number:</label>{element.customer_phone}</div>
              <div className="seventh"><label> Total Price:</label>{element.totalprice}</div>
              <div className="sixth"><label> Payment Status:</label>{element.paymentstatus}</div>
              <Link to={`/checkout/${element.booking_id}`}>
              <button
                type="button"
                className="btn"
              
              >
               Payment
              </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ViewBooking;
