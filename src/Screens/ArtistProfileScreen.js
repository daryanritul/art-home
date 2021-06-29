import React, { useState } from 'react';
import artist from '../assets/Images/arts/6.jpg';

import artData from '../assets/tempData';
import profile from '../assets/Images/arts/25.jpg';

import insta from '../assets/Images/insta.svg';
import facebook from '../assets/Images/facebook.svg';

const ArtistProfileScreen = () => {
  const [modalToggle, setModalToggle] = useState({
    status: false,
    data: null,
  });
  return (
    <>
      <div className="pageTitle">
        <h2>Ritul Daryan</h2>
      </div>
      <div className="profileCard">
        <img className="profile__image" src={artist} />
        <div className="profile__data">
          <p>Born in 2000</p>
          <p>Date Started : 01 January 2000</p>
          <p>Total Arts : 789 </p>
          <p>Bio </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            reprehenderit distinctio sint, et voluptates quasi, vitae asperiores
            doloribus amet, earum dicta dolore ex pariatur nemo nobis?
            Laudantium possimus id quaerat.
          </p>
          <div className="social_links">
            <img src={insta} />
            <img src={facebook} />
          </div>
        </div>
      </div>
      <div className="pageTitle">
        <h2>MY ARTS</h2>
      </div>
      <div className="artGallery">
        {artData.map((item, index) => {
          return (
            <div
              className="artcard"
              key={index}
              onClick={() => setModalToggle({ status: true, data: item })}
            >
              <img src={item.img} className="artcard__image" />
              <div className="artcard__text">
                <img src={profile} />
                <a href="">Captian America</a>
              </div>
            </div>
          );
        })}
      </div>

      {/* MODAL   */}

      <div className={`modal ${modalToggle.status ? 'toggle' : ''}`}>
        <div onClick={() => setModalToggle({ status: false, data: null })}>
          {modalToggle.data && (
            <div className="modal__container">
              <div className="modal__image">
                <img src={modalToggle.data.img} />
              </div>
              <div className="modal__body">
                <img src={modalToggle.data.img} />
                <a>{modalToggle.data.artist}</a>
                <a>{modalToggle.data.name}</a>
              </div>
              <div className="modal__btn">
                <p>Compressed Download</p>
                <p>Orignal Download</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ArtistProfileScreen;
