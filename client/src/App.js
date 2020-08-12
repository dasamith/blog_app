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
import AmithBio from './pages/AmithBio'
import Nav from './components/Nav'
import Login from "./components/Form/Login"
import Register from "./components/Form/Register"

function App() {


  return (
    <div>
      <Router>
        <div>
          <Nav />
          <Route exact path="/" component={Home} />
          <Route exact path="/newpost" component={NewPost} />
          <Route exact path="/store" component={Store} />
          <Route exact path="/about" component={AmithBio} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </div>
      </Router>
    </div>
  );
}

export default App;
