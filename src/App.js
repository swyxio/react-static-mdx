import React from 'react';
import { Router, Link } from 'react-static';
import { hot } from 'react-hot-loader';
//
import Routes from 'react-static-routes';

import './app.css';

const App = () => (
  <Router>
    <div className="wrapper">
      <header className="header">
        <h1>swyx.io</h1>
      </header>
      <nav className="sidebar">
        <Link exact to="/">
          Home
        </Link>
        <Link to="/talks">Talks</Link>
        <Link to="/writing">Writing</Link>
      </nav>
      <article className="content">
        <Routes />
      </article>
      <footer className="footer">My footer</footer>
    </div>
  </Router>
);

export default hot(module)(App);
