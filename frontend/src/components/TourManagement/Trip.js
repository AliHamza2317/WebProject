import React, { useEffect, useState } from "react"

import "../index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import TripData from "./TripData";
import axios from "axios";
function Trip()
{

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

    return(
        <>
        
        <div className="trip">
        <h1> Recent Trips</h1>
        <p> You can discover unique destinations </p>
        
        <div className="tripcard">
        {data.slice(2).map((item) => (
        <TripData image={item.image[0]} heading={item.destination} description={item.description} />
        
        ))}
        </div>
        
        </div>
        
        </>
    )
}


export default Trip