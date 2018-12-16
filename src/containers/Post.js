import React from 'react';
import { withRouteData, Link } from 'react-static';
import convert from 'htmr';
import Signup from './Signup';

function Post(post) {
  return (
    <div style={{ fontSize: '1.25rem' }}>
      <h3>{post.title}</h3>
      {convert(post.contents)}
      <hr />
      <small>
        Thank you for reading this essay. Do you have any thoughts or criticism
        to share? Feedback and criticism are welcome!{' '}
        <a href="https://twitter.com/swyx">Contact me here.</a>
      </small>
    </div>
  );
}
function Draft(draft) {
  return (
    <div style={{ fontSize: '1.25rem' }}>
      <h3>Draft: {draft.title}</h3>
      {convert(draft.contents)}
      <hr />
      <blockquote>
        ⚠️ You are reading an unpublished, incomplete draft. Questions are
        welcome but feedback/criticism may be premature.
      </blockquote>
    </div>
  );
}

export default withRouteData(({ post, draft }) => {
  const content = post || draft;
  return (
    <section className="row padding padding-size-large">
      <aside className="column column-size-large-3 column-size-small-12">
        <div
          style={{
            top: 180,
            left: 38,
            width: 314,
            position: 'fixed'
          }}
        >
          <h1>{content.title}</h1>
          <small>date tbd</small>
        </div>
      </aside>
      <div className="column column-size-large-6 column-size-small-12">
        {post ? Post(post) : Draft(draft)}

        <Signup />
      </div>
    </section>
  );
});
