import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

import { getArtistProfileFun, getArtistArtFun } from '../action/artistProfile';
import DisplayArt from '../Components/DisplayArt';

import insta from '../assets/Images/insta.svg';
import facebook from '../assets/Images/facebook.svg';
import twitter from '../assets/Images/twitter.svg';
import { useHistory, useParams } from 'react-router-dom';
import {
  CLEAR_ARTIST_ART_LIST,
  SET_ERROR_ARTIST_PROFILE,
  SET_IS_LOADING_ARTIST_PROFILE,
} from '../action/action.type';
import ArtModal from '../Components/ArtModal';
import MessageBox from '../Components/MessageBox';
import Spinner from '../Components/Spinner';

const ArtistProfileScreen = ({
  artistProfile,
  lastArt,
  error,
  artistArtList,
  isLoading,
  getArtistArtFun,
  getArtistProfileFun,
}) => {
  const [modalToggle, setModalToggle] = useState({
    status: false,
    data: null,
  });
  const { artistuid } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLoadMore = async () => {
    getArtistArtFun({ uid: artistuid, lastArt });
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

  useEffect(() => {
    if (
      !isLoading &&
      Math.round(scrollPosition) >=
        document.body.offsetHeight - window.innerHeight - 600 &&
      Math.round(scrollPosition) <=
        document.body.offsetHeight - window.innerHeight - 200
    ) {
      dispatch({ type: SET_IS_LOADING_ARTIST_PROFILE, payload: true });

      handleLoadMore();
    }
  }, [scrollPosition]);

  useEffect(() => {
    if (artistuid) {
      dispatch({ type: CLEAR_ARTIST_ART_LIST });
      getArtistArtFun({ uid: artistuid, lastArt: [] });
      getArtistProfileFun({ uid: artistuid });
    } else {
      dispatch({ type: SET_ERROR_ARTIST_PROFILE, payload: 'NO UID FPOUND' });
    }
  }, [artistuid]);
  console.log('ERROR', error);

  if (!artistuid) {
    history.back();
  }
  return (
    <>
      {isLoading && <Spinner />}
      {artistProfile.length !== 0 ? (
        <>
          <div className="pageTitle">
            <h2>{artistProfile.name}</h2>
          </div>
          <div className="profileCard">
            <img className="profile__image" src={artistProfile.profilePicUrl} />
            <div className="profile__data">
              <p>Total arts : {artistProfile.totalArt}</p>
              <p>Born in {artistProfile.dateOfBirth}</p>
              <p>Date Started : {artistProfile.dateStarted}</p>
              <p>Bio </p>
              <p>{artistProfile.bio}</p>
              <div className="social_links">
                {artistProfile.social &&
                  artistProfile.social.map((social, index) => {
                    if (social.socialProviderName === 'Instagram') {
                      return (
                        <a key={index} href={social.socialLink} target="_blank">
                          <img src={insta} alt="Instagram" />
                        </a>
                      );
                    } else if (social.socialProviderName === 'Facebook') {
                      return (
                        <a key={index} href={social.socialLink} target="_blank">
                          <img src={facebook} alt="Facebook" />
                        </a>
                      );
                    } else if (social.socialProviderName === 'Twitter') {
                      return (
                        <a key={index} href={social.socialLink} target="_blank">
                          <img src={twitter} alt="Twitter" />
                        </a>
                      );
                    }
                  })}
              </div>
            </div>
          </div>
          <div className="pageTitle">
            <h2>MY ARTS</h2>
          </div>
          <div className="artGrid">
            {artistArtList.map((columns, index) => (
              <div className="artGrid__columns" key={index}>
                {columns.map((item, index) => (
                  <DisplayArt
                    item={item}
                    key={index}
                    modal={modalToggle}
                    setModalToggle={setModalToggle}
                  />
                ))}
              </div>
            ))}
          </div>
          {modalToggle.status && (
            <ArtModal item={modalToggle} setModalToggle={setModalToggle} />
          )}
          {error ? <MessageBox message={error} type={'info'} inverted /> : null}
        </>
      ) : (
        !isLoading && (
          <MessageBox
            message={'No Artist Profile Found With ID pass with'}
            type={'danger'}
            inverted
          />
        )
      )}
    </>
  );
};

const mapStateToProps = state => ({
  artistProfile: state.artistProfile.artistProfile,
  artistArtList: state.artistProfile.artistArtList,
  lastArt: state.artistProfile.artistLastArt,
  error: state.artistProfile.error,
  isLoading: state.artistProfile.isLoading,
});

const mapDispatchToProps = {
  getArtistProfileFun: data => getArtistProfileFun(data),
  getArtistArtFun: data => getArtistArtFun(data),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistProfileScreen);
