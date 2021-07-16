import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getArtistListFun } from '../action/artist';
import { getArtListHomeFun } from '../action/home';
import artData from '../assets/tempData';
import MessageBox from '../Components/MessageBox';

const ArtistScreen = ({ artistList, error, getArtistListFun }) => {
  useEffect(() => {
    getArtistListFun();
  }, []);
  console.log('ERROR', error);

  return (
    <section className="artistsProfiles">
      {/* Page Heading */}
      <div className="pageTitle">
        <h2>artists</h2>
      </div>
      <div className="artists">
        {artistList.map((item, index) => {
          return (
            <div className="card" key={index}>
              <div class="card__image">
                <img src={item.profilePicUrl} />
              </div>
              <div class="card__name">
                <p>{item.name}</p>
              </div>
              <p>Total Arts : {item.totalArt}</p>
              <p>Born in {item.dateOfBirth}</p>
              <p>Date Started : {item.dateStarted}</p>
              <div class="card__button">
                <Link to={'/artistprofile/' + item.uid}>
                  <p>Visit Profile</p>
                </Link>
              </div>
            </div>
          );
        })}
        {error ? <MessageBox message={error} type={'danger'} inverted /> : null}
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  artistList: state.artist.artistList,
  error: state.artist.error,
});

const mapDispatchToProps = {
  getArtistListFun: data => getArtistListFun(data),
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistScreen);
