import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style2.css';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const ViewBooking = () => {
  const [data, setData] = useState([]);
  const decodedToken = jwt_decode(localStorage.getItem('token'));
  const user_id = decodedToken.id;
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token && user_id) {
        axios
        .get(`http://localhost:3001/tour/viewbookings/${user_id}`, {
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
    }
  }, [token, user_id]);

  if (!token || !user_id) {
    return <p>Please log in to view your bookings.</p>;
  }

  return (
    <>
      <div className="main">
        <h1>{data.length} Bookings</h1>
        <div className="center">
          {data.map((element) => (
            <div className="first" key={element._id}>
              <h3 className="second">{element.customer_name}</h3>
              <div className="third">
                <label>Email:</label>
                {element.customer_email}
              </div>
              <div className="fifth">
                <label>Contact Number:</label>
                {element.customer_phone}
              </div>
              <div className="seventh">
                <label>Total Price:</label>
                {element.totalprice}
              </div>
              <div className="sixth">
                <label>Payment Status:</label>
                {element.paymentstatus}
              </div>
              <Link to={`/checkout/${element.booking_id}`}>
                <button type="button" className="btn">
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
