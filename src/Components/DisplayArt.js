import React, { useState } from "react";
import { Link } from "react-router-dom";

const DisplayArt = ({ item }) => {
  const [modalToggle, setModalToggle] = useState(false);
  return (
    <>
      <div className="artcard" onClick={() => setModalToggle(true)}>
        <img src={item.imageUrl} className="artcard__image" />
        <div className="artcard__text">
          <img src={item.artistprofilePicUrl} />
          <Link href="/artistprofilescreen">{item.artistname}</Link>
        </div>
      </div>

      {/* MODAL   */}

      <div className={`modal ${modalToggle ? "toggle" : ""}`}>
        <div onClick={() => setModalToggle(false)}>
          {item && (
            <div className="modal__container">
              <div className="modal__image">
                <img src={item.imageUrl} />
              </div>
              <div className="modal__body">
                <img src={item.artistprofilePicUrl} />
                <a>{item.artistname}</a>
                <a>{item.artName}</a>
              </div>
              <div className="modal__btn">
                <p>
                  <a href={item.imageUrl} download target="_blank">
                    Compressed Downloada
                  </a>
                </p>
                <p>
                  <a href={item.downloadUrl} download target="_blank">
                    Orignal Download
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* MODAL END */}
    </>
  );
};

export default DisplayArt;
