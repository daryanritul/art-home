import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import altImage from '../assets/Images/altImage.png';

const DisplayArt = ({ item, setModalToggle }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
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
          {!imageLoaded && (
            <div className="artcard__skeleton">
              <div className="spinner-container artcard" />
            </div>
          )}
          <img
            src={item.imageUrl}
            className={`artcard__image ${
              imageLoaded ? 'artcard__image--true' : 'artcard__image--false'
            }`}
            alt="Not Image Found"
            onError={event => addDefaultSrc(event)}
            onLoad={() => setImageLoaded(true)}
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
