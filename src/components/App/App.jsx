import { HashRouter as Router, Route, Link } from "react-router-dom";

//imported functions from components(route 0
import Feeling from '../Feeling/Feeling.jsx';
// import Understanding from '../Understanding/Understanding.jsx';
// import Support from '../Support/Support.jsx';
// import Comment from '../Comment/Comment.jsx';
// import Review from '../Review/Review.jsx';
// import Submitted from '../Submitted/Submitted.jsx';

function App() {

  return (
    <div className='App'>
      <Router>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>


        <Route exact path="/">
          <Feeling />
        </Route>
        {/* <Route exact path="/understanding">
          <Understanding />
        </Route>
        <Route exact path="/support">
          <Support />
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
      </Router> */}

    </div>
  );
}


export default App;