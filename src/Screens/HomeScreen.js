import React, { useEffect, useState } from 'react';

import { IoIosSearch } from 'react-icons/io';

import { connect, useDispatch } from 'react-redux';
import { getArtListHomeFun } from '../action/home';
import { Link } from 'react-router-dom';
import DisplayArt from '../Components/DisplayArt';
import { CLEAR_ART_LIST } from '../action/action.type';

const HomeScreen = ({ artList, error, lastArt, getArtListHomeFun }) => {
  const [search, setSearch] = useState(null);
  const [selector, setSelector] = useState({ search: search, category: 'All' });
  const dispatch = useDispatch();
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

  const handleLoadMore = async () => {
    if (selector.category === 'All') {
      await getArtListHomeFun({
        search: selector.search,
        categoryFilter: selector.category,
        search: selector.search,
        lastArt,
      });
    } else {
      getArtListHomeFun({ categoryFilter: selector.category, lastArt });
    }
  };
  //   const [scrollPosition, setScrollPosition] = useState(0);

  //   const handleScroll = () => {
  //     const position = window.pageYOffset;
  //     setScrollPosition(position);
  //   };

  //   useEffect(() => {
  //     window.addEventListener('scroll', handleScroll, { passive: true });

  //     return () => {
  //       window.removeEventListener('scroll', handleScroll);
  //     };
  //   }, []);
  //   console.log(
  //     Math.round(scrollPosition),
  //     ' >=',
  //     document.body.offsetHeight - window.innerHeight
  //   );
  //   useEffect(() => {
  //     if (
  //       Math.round(scrollPosition) >=
  //       document.body.offsetHeight - window.innerHeight
  //     ) {
  //       handleLoadMore();
  //       console.log('Hi From ENd');
  //     }
  //   }, [scrollPosition]);

  useEffect(() => {
    dispatch({ type: CLEAR_ART_LIST });
    getArtListHomeFun({
      categoryFilter: selector.category,
      search: selector.search,
      lastArt: [],
    });
  }, [selector]);

  return (
    <>
      {/* Search bar */}

      <div className="search">
        <h2>Explore, Search & Download Free Arts</h2>
        <div className="search-bar">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Serarch for arts here"
          />
          <IoIosSearch
            className="icon"
            onClick={() =>
              setSelector({
                ...selector,
                search,
              })
            }
            type="button"
          />
        </div>
        <p>
          Search any arts by name, tags and filter by category, visit artists
          and much more.
        </p>
      </div>

      {/* Catregories Section */}
      <div className="category">
        <ul className="category__list">
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
        <p>Filter Results</p>
        <div className="result__data">
          {selector.search && <p>{selector.search}</p>}
          <p>{selector.category}</p>
        </div>
        <p
          className="result__clear"
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

      {/* Art Section */}
      {error && (
        <div className="errorBox">
          <p>{error}</p>
        </div>
      )}

      <section>
        {artList.map((itemData, index) => (
          <div key={index}>
            <div className="artGallery">
              {itemData.map((item, index) => (
                <DisplayArt item={item} key={index} />
              ))}
            </div>
          </div>
        ))}
        <div className="load-more" onClick={() => handleLoadMore()}>
          View More Arts
        </div>
      </section>
    </>
  );
};

const mapStateToProps = state => ({
  artList: state.home.artList,
  lastArt: state.home.lastArt,
  error: state.home.error,
});

const mapDispatchToProps = {
  getArtListHomeFun: data => getArtListHomeFun(data),
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
