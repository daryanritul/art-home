import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getArtistListFun } from "../action/artist";
import { getArtListHomeFun } from "../action/home";
import artData from "../assets/tempData";

const ArtistScreen = ({ artistList, getArtistListFun }) => {
  useEffect(() => {
    getArtistListFun();
  }, []);

  return (
    <>
      {/* Page Heading */}
      <div className="pageTitle">
        <h2>artists</h2>
      </div>
      <div className="artists">
        {artistList.map((item, index) => {
          return (
            <div className="artist-card" key={index}>
              <img src={item.profilePicUrl} className="artist__image" />
              <div className="artist__data">
                <p>{item.name}</p>
                <p>Total arts : Comming Soon </p>
                <p>Born in {item.dateOfBirth}</p>
                <p>Date Started : {item.dateStarted}</p>
                <Link to={"/artistprofilescreen/" + item.uid}>
                  Visit Profile
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  artistList: state.artist.artistList,
});

const mapDispatchToProps = {
  getArtistListFun: (data) => getArtistListFun(data),
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistScreen);
