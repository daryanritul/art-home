import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { getArtistProfileFun, getArtistArtFun } from "../action/artistProfile";
import DisplayArt from "../Components/DisplayArt";

import artist from "../assets/Images/arts/6.jpg";

import artData from "../assets/tempData";
import profile from "../assets/Images/arts/25.jpg";

import insta from "../assets/Images/insta.svg";
import facebook from "../assets/Images/facebook.svg";
import { useParams } from "react-router-dom";

const ArtistProfileScreen = ({
  artistProfile,
  artistArtList,
  getArtistArtFun,
  getArtistProfileFun,
}) => {
  const { artistuid } = useParams();

  useEffect(() => {
    if (artistuid) {
      getArtistArtFun({ uid: artistuid });
      getArtistProfileFun({ uid: artistuid });
    }
  }, [artistuid]);

  console.log("artistArtList", artistArtList);

  return (
    <>
      {artistProfile ? (
        <>
          <div className="pageTitle">
            <h2>{artistProfile.name}</h2>
          </div>
          <div className="profileCard">
            <img className="profile__image" src={artistProfile.profilePicUrl} />
            <div className="profile__data">
              <p>Total arts : Comming Soon</p>
              <p>Born in {artistProfile.dateOfBirth}</p>
              <p>Date Started : {artistProfile.dateStarted}</p>
              <p>Bio </p>
              <p>{artistProfile.bio}</p>
              <div className="social_links">
                <img src={insta} />
                <img src={facebook} />
              </div>
            </div>
          </div>
          <div className="pageTitle">
            <h2>MY ARTS</h2>
            <div className="artGallery">
              {artistArtList.length ? (
                <>
                  {artistArtList.map((item, index) => (
                    <DisplayArt item={item} key={index} />
                  ))}
                </>
              ) : null}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => ({
  artistProfile: state.artistProfile.artistProfile,
  artistArtList: state.artistProfile.artistArtList,
});

const mapDispatchToProps = {
  getArtistProfileFun: (data) => getArtistProfileFun(data),
  getArtistArtFun: (data) => getArtistArtFun(data),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistProfileScreen);
