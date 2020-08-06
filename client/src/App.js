import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home.js'
import NewPost from "./pages/NewPost.js"
import Store from './pages/Store'


function App() {


  return (
    <div>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/NewPost" component={NewPost} />
          <Route exact path="/store" component={Store} />
        </div>
      </Router>
    </div>
  );
}

export default App;
