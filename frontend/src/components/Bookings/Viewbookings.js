import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./style.css"


const ViewBooking = () => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios
      .get('http://localhost:3000/tour/viewbookings', {
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
    .delete(`http://localhost:3000/tour/booking/${bookingId}`, {
      headers: {
        token: token,
      },
    })
    .then(function (response) {
      console.log(response);
      alert("Booking is Cancelled Successfully");
      // Fetch the updated bookings from the backend
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
              <div className="third">{element.customer_email}</div>
              <span className="fourth">{'open position'}</span>
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

export default ViewBooking;
