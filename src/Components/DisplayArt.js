import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import altImage from '../assets/Images/altImage.png';

const DisplayArt = ({ item, setModalToggle }) => {
  const addDefaultSrc = event => {
    event.target.src = altImage;
  };
  return (
    <>
      <div className="artcard-container">
        <div
          className="artcard"
          onClick={() => setModalToggle({ status: true, data: item })}
        >
          <img
            src={item.imageUrl}
            className="artcard__image"
            alt="Not Image Found"
            onError={event => addDefaultSrc(event)}
          />
        </div>
        <div className="artcard-profile">
          <img
            src={item.artistprofilePicUrl}
            alt="Image Not Found"
            onError={event => addDefaultSrc(event)}
          />
          <Link
            className="artcard-profile__artist"
            to={'/artistprofilescreen/' + item.uid}
          >
            {item.artistname}
          </Link>
        </div>
      </div>
    </>
  );
};

export default DisplayArt;
