import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home.js'
import NewPost from "./pages/NewPost.js"


function App() {


  return (
    <div>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/NewPost" component={NewPost} />

        </div>
      </Router>
    </div>
  );
}

export default App;
