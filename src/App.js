import React from 'react';
import './css/styles.css';
import './css/index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import ArtistProfileScreen from './Screens/ArtistProfileScreen';
import ArtistScreen from './Screens/ArtistScreen';

import HomeScreen from './Screens/HomeScreen';
import ContactUsScreen from './Screens/ContactUsScreen';
import NotFound from './Screens/NotFound';

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route exact path="/artist">
            <ArtistScreen />
          </Route>
          <Route exact path="/artistprofile/:artistuid">
            <ArtistProfileScreen />
          </Route>

          <Route exact path="/contactus">
            <ContactUsScreen />
          </Route>
          <Route exact path="*" component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
