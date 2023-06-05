import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";


function Home() {
  return (
    <>
     
      <Navbar/>
      <div className="hero">
        <img
          src="https://cdn.pixabay.com/photo/2018/03/14/21/45/sunset-3226467_1280.jpg"
          alt=""
        />
      </div>

      <div className="hero-text">
        <h1>Discover the World, Create Memories</h1>

        <p>Unlock the beauty of the world and make lifelong memories.</p>
      </div>
    </>
  );
}

export default Home;
