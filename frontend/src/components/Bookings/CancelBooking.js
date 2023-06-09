import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./style2.css"


const CancelBooking = () => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios
      .get('http://localhost:3001/tour/viewbooking', {
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


const cancelBooking = (bookingId) => {
  axios
    .delete(`http://localhost:3001/tour/booking/${bookingId}`, {
      headers: {
        token: token,
      },
    })
    .then(function (response) {
      console.log(response);
      alert("Booking is Cancelled Successfully");

      axios
        .get('http://localhost:3001/tour/viewbooking', {
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
    })
    .catch(function (err) {
      console.log(err);
    });
};


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
              
              <button
                type="button"
                className="btn"
                onClick={() => cancelBooking(element.booking_id)}
              >
                Cancel Booking
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CancelBooking;
