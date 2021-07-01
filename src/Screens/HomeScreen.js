import React, { useEffect, useState } from "react";

import banner from "../assets/Images/Banner.jpg";

import artData from "../assets/tempData";
import profile from "../assets/Images/arts/25.jpg";
import { connect, useDispatch } from "react-redux";
import { getArtListHomeFun } from "../action/home";
import { Link } from "react-router-dom";
import DisplayArt from "../Components/DisplayArt";
import { CLEAR_ART_LIST } from "../action/action.type";

const HomeScreen = ({ artList, error, lastArt, getArtListHomeFun }) => {
  const [imageList, setImageList] = useState(artData);
  const [search, setSearch] = useState(null);
  const [selector, setSelector] = useState({ search: search, category: "All" });
  const dispatch = useDispatch();
  const category = [
    "All",
    "Painting",
    "Mandala",
    "Craft",
    "Pop Art",
    "Abstract Art",
    "Illustration",
    "Aborignal Art",
    "Oil Painting",
    "Sculpture Art",
    "Sketching",
    "Polaroids",
    "Cartoon Art",
  ];

  const handleLoadMore = async () => {
    if (selector.category === "All") {
      getArtListHomeFun({
        search: selector.search,
        categoryFilter: selector.category,
        search: selector.search,
        lastArt,
      });
    } else {
      getArtListHomeFun({ categoryFilter: selector.category, lastArt });
    }
  };

  useEffect(() => {
    dispatch({ type: CLEAR_ART_LIST });
    getArtListHomeFun({
      categoryFilter: selector.category,
      search: selector.search,
      lastArt: [],
    });
  }, [selector]);

  console.log("ERROR", error);
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
            onChange={(e) => setSearch(e.target.value)}
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
                category: "All",
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
          {artList.map((item, index) => (
            <DisplayArt item={item} key={index} />
          ))}
        </div>

        <div className="artGallery__btn" onClick={() => handleLoadMore()}>
          Load More
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  artList: state.home.artList,
  lastArt: state.home.lastArt,
  error: state.home.error,
});

const mapDispatchToProps = {
  getArtListHomeFun: (data) => getArtListHomeFun(data),
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
