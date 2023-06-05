import React from "react"
import "../index.css"
import 'bootstrap/dist/css/bootstrap.min.css';


function TripData(props)
{
    return(
        <>
       
        
        <div className="t-card">
            <div className="t-image">
                {/* <img src="https://media.istockphoto.com/id/498553541/photo/place-plumereau-in-tours.jpg?s=612x612&w=0&k=20&c=4i-NBx7K0h0L6wZEm4v3JmuSgdrpppfyGW751Mv0_us="/> */}
                <img src={props.image} alt=""/>
            </div>
            <h2>{props.heading}</h2>
            <p> {props.description}</p>
            <button id="btn" > Bookings</button>
        </div>
        
      
        </>
    )
}


export default TripData