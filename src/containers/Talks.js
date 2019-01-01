import React from 'react';
import { withRouteData, Link } from 'react-static';
import convert from 'htmr';
import { Helmet } from 'react-helmet';
import Signup from './Signup';

const sortTalk = (a, b) => a.venues.length - b.venues.length;

function TalkComponent(talk, i) {
  const maybe = (x, fx) => x && fx(x);
  return (
    <li key={i}>
      <pre
        style={{
          display: 'inline',
          padding: 5,
          marginRight: 5,
          border: '1px solid blue'
        }}
      >
        {talk.venues}
      </pre>
      <span className="list-item__title">
        <Link to={`/talks/${talk.slug}`}>{talk.title}</Link>
      </span>
      {/* {maybe(talk)} */}
    </li>
  );
}

// export default withRouteData(({ bio, pending }) => (
export default withRouteData(props => {
  const { talks2018 } = props;
  return (
    <section className="row padding padding-size-large">
      <Helmet>
        <meta charSet="utf-8" />
        <title>swyx.io | Talks</title>
        <link rel="canonical" href="https://swyx.io/talks" />
      </Helmet>
      <aside className="column column-size-large-3 column-size-small-12">
        <h1>Recent Talks</h1>
      </aside>
      <div className="column column-size-large-6 column-size-small-12 writing-page__content">
        <ul>{talks2018.sort(sortTalk).map(TalkComponent)}</ul>
        <Signup />
      </div>
      <aside className="column column-size-large-3 column-size-small-12 writing-page__sidebar-right">
        <small>
          <em>
            see <Link to="/talks/pending">pending talks</Link>
          </em>
        </small>
      </aside>
    </section>
  );
});
