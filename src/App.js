import React from 'react';
import { withRouter, Router, Link } from 'react-static';
import { hot } from 'react-hot-loader';
//
import Routes from 'react-static-routes';

import './app.css';

const App = () => (
  <Router>
    <div className="site-container">
      <header className="site-header" role="banner">
        <section className="row padding padding-size-default">
          <div className="column column-size-large-3 column-size-small-12">
            <a className="site-header__title" href="/">
              swyx
            </a>
          </div>
        </section>
        <div className="column column-size-large-9 column-size-small-12">
          <nav className="site-navigation">
            <Link
              className="site-navigation__item site-navigation__item-position-top"
              exact
              to="/"
            >
              Home
            </Link>
            <Link
              className="site-navigation__item site-navigation__item-position-top"
              to="/talks"
            >
              Talks
            </Link>
            <Link
              className="site-navigation__item site-navigation__item-position-top"
              to="/writing"
            >
              Writing
            </Link>
          </nav>
        </div>
      </header>
      <main role="main" className="site-main-content">
        <Routes />
      </main>
      <Footer />
    </div>
  </Router>
);

const Footer = withRouter(props => {
  return (
    <footer role="contentinfo" className="site-footer">
      <section className="row padding padding-size-default">
        <div className="column column-size-large-9 column-size-small-12">
          <nav className="site-navigation">
            <Link
              className="site-navigation__item site-navigation__item-position-bottom"
              exact
              to="/"
            >
              Home
            </Link>
            <Link
              className="site-navigation__item site-navigation__item-position-bottom"
              to="/talks"
            >
              Talks
            </Link>
            <Link
              className="site-navigation__item site-navigation__item-position-bottom"
              to="/writing"
            >
              Writing
            </Link>
          </nav>
        </div>
        {/* <div className="column column-size-large-3 column-size-small-12">
          <div className="site-footer__message">
            <object className="site-footer__glyph-heart">
              <svg width="10px" height="10px" viewBox="0 0 10 10">
                <path d="M9,0.7c-1-0.9-2.5-0.9-3.5,0L5,1L4,0.6c-0.97-0.9-2.5-0.8-3.5, 0c-1,1-1,2.63,0,3.6L5,8l4.17-3.8C10,3.30,10,1.67,9.17,.6z" />
              </svg>
            </object>
            <small>Do Good</small>
          </div>
          <div className="site-footer__copyright">
            <small>
              <span className="site-footer__glyph-copyright">©</span>
              <span>2013-2018 · </span>
              <a href="/rss.xml">
                <span>RSS</span>
                <object className="site-footer__glyph-rss">
                  <svg width="10px" height="10px" viewBox="0 0 10 10">
                    <path d="M0,0 C2.75438158,0 5.10964474,0.978065789 7.06578947, 2.93421053 C9.02193421,4.89035526 10,7.24561842 10,10 C10, 10 8.44736842,10 8.44736842,10 C8.44736842,7.66667105 7.62280263, 5.67982895 5.97368421,4.03947368 C4.32456579,2.39911842 2.33332895, 1.57894737 0,1.57894737 C0,1.57894737 0,0 0,0 C0,0 0,0 0,0 M0, 3.13157895 C1.91227632,3.13157895 3.53947368,3.80263158 4.88157895, 5.14473684 C6.22368421,6.48684211 6.89473684,8.10526316 6.89473684, 10 C6.89473684,10 5.34210526,10 5.34210526,10 C5.34210526, 8.54385526 4.82017105,7.29385526 3.77631579,6.25 C2.73246053,5.20614474 1.47368421, 4.68421053 0,4.68421053 C0,4.68421053 0,3.13157895 0,3.13157895 C0, 3.13157895 0,3.13157895 0,3.13157895 M1.5,7.02631579 C1.90351316, 7.02631579 2.25438158,7.17105263 2.55263158,7.46052632 C2.85088158,7.75 3, 8.10526316 3,8.52631579 C3,8.92982895 2.85088158,9.27631579 2.55263158, 9.56578947 C2.25438158,9.85526316 1.90351316,10 1.5,10 C1.09648684, 10 0.745618421,9.85526316 0.447368421,9.56578947 C0.149118421, 9.27631579 0,8.92982895 0,8.52631579 C0,8.10526316 0.149118421, 7.75 0.447368421,7.46052632 C0.745618421,7.17105263 1.09648684, 7.02631579 1.5,7.02631579 C1.5,7.02631579 1.5,7.02631579 1.5, 7.02631579" />
                  </svg>
                </object>
              </a>
            </small>
          </div>
        </div> */}
      </section>
    </footer>
  );
});

export default hot(module)(App);
