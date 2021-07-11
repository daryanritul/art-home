import React, { useEffect, useState } from 'react';

import { IoIosSearch } from 'react-icons/io';

import { connect, useDispatch } from 'react-redux';
import { getArtListHomeFun } from '../action/home';
import DisplayArt from '../Components/DisplayArt';
import { CLEAR_ART_LIST, SET_IS_LOADING_HOME } from '../action/action.type';
import ArtModal from '../Components/ArtModal';

const HomeScreen = ({
  artList,
  error,
  lastArt,
  isLoading,
  getArtListHomeFun,
}) => {
  const [search, setSearch] = useState('');
  const [selector, setSelector] = useState({ search: search, category: 'All' });
  const [modalToggle, setModalToggle] = useState({
    status: false,
    data: null,
  });
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
    await getArtListHomeFun({
      search: selector.search,
      categoryFilter: selector.category,
      search: selector.search.toLowerCase(),
      lastArt,
    });
  };
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // console.log(
  //   Math.round(scrollPosition),
  //   ' >=',
  //   document.body.offsetHeight - window.innerHeight
  // );

  useEffect(() => {
    if (
      !isLoading &&
      Math.round(scrollPosition) >=
        document.body.offsetHeight - window.innerHeight - 500
    ) {
      dispatch({ type: SET_IS_LOADING_HOME, payload: true });

      handleLoadMore();
      console.log('Hi From ENd');
    }
  }, [scrollPosition]);

  useEffect(() => {
    dispatch({ type: CLEAR_ART_LIST });
    dispatch({ type: SET_IS_LOADING_HOME, payload: true });
    getArtListHomeFun({
      categoryFilter: selector.category,
      search: selector.search.toLowerCase(),
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
              search: '',
              category: 'All',
            })
          }
        >
          clear all
        </p>
      </div>

      {/* Art Section */}

      <section>
        {/* <div className="artGallery">
          {artList.map((item, index) => (
            <DisplayArt item={item} key={index} />
          ))}
        </div> */}

        <div className="artGrid">
          <div className="artGrid__columns">
            {artList.col1.map((item, index) => (
              <DisplayArt
                item={item}
                key={index}
                modal={modalToggle}
                setModalToggle={setModalToggle}
              />
            ))}
          </div>
          <div className="artGrid__columns">
            {artList.col2.map((item, index) => (
              <DisplayArt
                item={item}
                key={index}
                modal={modalToggle}
                setModalToggle={setModalToggle}
              />
            ))}
          </div>
          <div className="artGrid__columns">
            {artList.col3.map((item, index) => (
              <DisplayArt
                item={item}
                key={index}
                modal={modalToggle}
                setModalToggle={setModalToggle}
              />
            ))}
          </div>
        </div>
        {modalToggle.status && (
          <ArtModal item={modalToggle} setModalToggle={setModalToggle} />
        )}
        {error ? (
          <div className="errorBox">
            <p>{error}</p>
          </div>
        ) : (
          <div className="load-more" onClick={() => handleLoadMore()}>
            View More Arts
          </div>
        )}
      </section>
    </>
  );
};

const mapStateToProps = state => ({
  artList: state.home.artList,
  lastArt: state.home.lastArt,
  error: state.home.error,
  isLoading: state.home.isLoading,
});

const mapDispatchToProps = {
  getArtListHomeFun: data => getArtListHomeFun(data),
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
