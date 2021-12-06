import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import axios from 'axios';
import './App.css';
//importing components here
import QuestionList from "../QuestionList/QuestionList";
import FeedbackInput from "../FeedbackInput/FeedbackInput";
import Submit from "..Submit/Submit";

function App() {
  const dispatch = useDispatch();
  const [style, setStyle] = useState("")

  const initialState = {
    FeedbackQuestions:  [
    { currentPage:1, text: 'How are you feeling today?'}, 
    { currentPage:2, text: 'How well are you understanding the content?'},
    { currentPage:3, text: 'How well are you being supported?'},
    { currentPage:4, text: 'Any comments you want to leave?'} 
    ]};

  useEffect(() => {
    console.log("in useEffect");
    retrieveFeedback();
  }, []);

  function retrieveFeedback() {
    axios({
      method: "GET",
      url: "/api/feedback",
    })
      .then((response) => {
        console.log("GET feedback response:", response.data);
        dispatch({
          type: "RETRIEVE_FEEDBACK",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("/api/feedback GET error:", error);
      });
  };


  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
        
        {let currentPage = 0,}

      <Router>
        <Route exact path="/">
          <Feelings />
        </Route>
        <Route exact path="/understanding">
          <Understanding />
        </Route>
        <Route exact path="/supported">
          <Supported/>
        </Route>
        <Route exact path="/comments">
          <Comments />
        </Route>
        <Route exact path="/review">
          <Review />
        </Route>
        <Route exact path="/submitted">
          <Submitted/>
        </Route>
        <Route exact path="/newsurvey">
          <NewSurvey />
        </Route>

        <p className={style}>
          <Link to="/understanding">
            <button className="firstNext" onClick={incrementPage}>Next</button>
          </Link>
        </p>
      </Router>
    </div>
  );
}

export default App;
