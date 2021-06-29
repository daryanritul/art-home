import React, { useState } from 'react';

import banner from '../assets/Images/Banner.jpg';

import artData from '../assets/tempData';
import profile from '../assets/Images/arts/25.jpg';

const HomeScreen = () => {
  const [modalToggle, setModalToggle] = useState({
    status: false,
    data: null,
  });
  const [imageList, setImageList] = useState(artData);
  const [search, setSearch] = useState(null);
  const [selector, setSelector] = useState({ search: search, category: 'All' });
  const category = [
    'All',
    'Painting',
    'Mandala',
    'Craft',
    'Pop Art',
    'Abstract Art',
    'Illustration',
    'Aborignal Art',
    'Oil Painting',
    'Sculpture Art',
    'Sketching',
    'Polaroids',
    'Cartoon Art',
  ];

  return (
    <>
      {/* Hero Section */}
      <header>
        <div className="banner">
          <div className="banner__text">
            <h2>Are You an Artist?</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              reprehenderit distinctio sint, et voluptates quasi, vitae
              asperiores doloribus amet, earum dicta dolore ex pariatur nemo
              nobis? Laudantium possimus id quaerat.
            </p>
            <a className="button btn--light">Sign Up</a>
          </div>
          <div className="banner__img">
            <img className="img" src={banner} />
          </div>
        </div>
      </header>

      {/* Search bar */}

      <section>
        <h2 className="art-title">Art Gallery</h2>

        <div className="searchBar">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="searchBar__input"
            placeholder="Search arts by name, artist name and art tags"
          />
          <button
            className="searchBar__button"
            type="button"
            onClick={() =>
              setSelector({
                ...selector,
                search,
              })
            }
          >
            Search
          </button>
        </div>
      </section>

      {/* Catregories Section */}
      <section>
        <div className="category">
          <ul className="list category__list">
            {category.map((item, index) => (
              <li
                key={index}
                onClick={() => setSelector({ ...selector, category: item })}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="result">
          <p>Filters</p>
          <div className="result__data">
            {selector.search && <p>{selector.search}</p>}
            <p>{selector.category}</p>
          </div>
          <p
            className="clearall"
            onClick={() =>
              setSelector({
                search: null,
                category: 'All',
              })
            }
          >
            clear all
          </p>
        </div>
      </section>

      {/* Art Section */}

      <section>
        <div className="artGallery">
          {imageList.map((item, index) => {
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

        {/* MODAL END */}
        <div
          className="artGallery__btn"
          onClick={() => setImageList([...imageList, ...artData])}
        >
          <p className="load__text ">Load More</p>
        </div>
      </section>
    </>
  );
};

export default HomeScreen;
