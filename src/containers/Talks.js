import React from 'react';
import { withRouteData, Link } from 'react-static';
import convert from 'htmr';

function TalkComponent(talk, i) {
  const maybe = (x, fx) => x && fx(x);
  return (
    <li key={i}>
      <h3>
        <Link to={`/talks/${talk.slug}`}>{talk.title}</Link>
      </h3>
      {/* {maybe(talk)} */}
    </li>
  );
}

// export default withRouteData(({ bio, pending }) => (
export default withRouteData(props => {
  const { talks2018 } = props;
  return (
    <div>
      <h3>Recent Talks</h3>
      <ul>{talks2018.map(TalkComponent)}</ul>
      <hr />
      <small>
        <em>
          see <Link to="/talks/pending">pending talks</Link>
        </em>
      </small>
    </div>
  );
});
