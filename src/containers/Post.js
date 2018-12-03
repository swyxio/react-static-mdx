import React from 'react';
import { withRouteData, Link } from 'react-static';
import convert from 'htmr';

function Post(post) {
  return (
    <div style={{ fontSize: '1.25rem' }}>
      <h3>{post.title}</h3>
      {convert(post.contents)}
      <hr />
      <em>
        Thank you for reading this essay. Do you have any thoughts or criticism
        to share? Feedback and criticism are welcome!{' '}
        <a href="https://twitter.com/swyx">Contact me here.</a>
      </em>
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
  return post ? Post(post) : Draft(draft);
});
