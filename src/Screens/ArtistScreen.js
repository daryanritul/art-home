import React from "react";
import { Link } from "react-router-dom";

import artData from "../assets/tempData";

const ArtistScreen = () => {
  return (
    <>
      {/* Page Heading */}
      <div className="pageTitle">
        <h2>artists</h2>
      </div>
      <div className="artists">
        {artData.map((item, index) => {
          return (
            <div className="artist-card" key={index}>
              <img src={item.img} className="artist__image" />
              <div className="artist__data">
                <p>Ritul Daryan</p>
                <p>Total arts : 76</p>
                <p>Born in 2000</p>
                <p>Date Started : 03 June 2021</p>
                <Link to="/artistprofilescreen">Visit Profile</Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ArtistScreen;
