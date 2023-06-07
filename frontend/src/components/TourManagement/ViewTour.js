import React, { useEffect, useState } from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Home from "./Home";
import Trip from "./Trip";
import Footer from "../Footer";
import axios from "axios";

function ViewTour() {
  const [data, setData] = useState([]);
  let token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get("http://localhost:3001/tour/view", {
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
  });

 return (
  <>
    <Home />
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you an opportunity to see a lot within a time frame</p>
      {data.slice(0,2).map((item) => (
      <div className="first-des">
        <div className="des-text">
          
            <React.Fragment key={item.tour_id}>
              <h2>{item.destination}</h2>
              <p>{item.description}</p>
              <Link to={`/booking/${item.tour_id}`}>
              <button id="btnn">Bookings</button>
            </Link>
            </React.Fragment>
         
        </div>

        <div className="image">
         
            <React.Fragment key={item.tour_id}>
              <img src={item.image[0]} alt="" />
              <img src={item.image[1]} alt="" />
            </React.Fragment>
          
        </div>
      </div>
      ))}
    </div>
    <Trip />
    <Footer />
  </>
);

  
          }

export default ViewTour;
