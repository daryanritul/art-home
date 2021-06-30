import React from "react";
import "./css/styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import ArtistProfileScreen from "./Screens/ArtistProfileScreen";
import ArtistScreen from "./Screens/ArtistScreen";

import HomeScreen from "./Screens/HomeScreen";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route exact path="/artistscreen">
            <ArtistScreen />
          </Route>
          <Route exact path="/artistprofilescreen">
            <ArtistProfileScreen />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
