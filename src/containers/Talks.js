import React from 'react';
import { withRouteData, Link } from 'react-static';
import convert from 'htmr';

function TalkComponent(talk, i) {
  const maybe = (x, fx) => x && fx(x);
  return (
    <li key={i}>
      <p className="list-item__title">
        <Link to={`/talks/${talk.slug}`}>{talk.title}</Link>
      </p>
      {/* {maybe(talk)} */}
    </li>
  );
}

// export default withRouteData(({ bio, pending }) => (
export default withRouteData(props => {
  const { talks2018 } = props;
  return (
    <section className="row padding padding-size-large">
      <aside className="column column-size-large-3 column-size-small-12">
        <h1>Recent Talks</h1>
      </aside>
      <div className="column column-size-large-6 column-size-small-12 writing-page__content">
        <ul>{talks2018.map(TalkComponent)}</ul>
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
