import React from 'react';
import './css/styles.css';

import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import ArtistProfileScreen from './Screens/ArtistProfileScreen';
import ArtistScreen from './Screens/ArtistScreen';

import HomeScreen from './Screens/HomeScreen';

const App = () => {
  return (
    <>
      <NavBar />
      {/* <HomeScreen /> */}
      {/* <ArtistScreen /> */}
      <ArtistProfileScreen />
      <Footer />
    </>
  );
};

export default App;
