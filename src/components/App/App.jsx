import React from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import './App.css';

import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comment from '../Comment/Comment';
import Review from '../Review/Review';
import Submitted from '../Submitted/Submitted';


function App () {
  
  return (
    <div>
      <header className="bg-blue-400 text-center py-6 text-3xl m-4">
        <h1 className="text-blue-100 ">Feedback!</h1>
        <h4 className="underline">Don't forget it!</h4>
      </header>

      <Router>
        <Route exact path="/">
        <Feeling />
        </Route>

        <Route exact path="/understanding">
          <Understanding />
        </Route>

        <Route exact path="/supported">
          <Supported />
        </Route>

        <Route exact path="/comment">
          <Comment />
        </Route>

        <Route exact path="/review">
          <Review />
        </Route>

        <Route exact path="/submitted">
          <Submitted />
        </Route>

    </Router>
  </div>
  );


}

export default App;