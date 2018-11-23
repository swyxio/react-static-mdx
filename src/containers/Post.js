import React from 'react';
import { withRouteData, Link } from 'react-static';
import convert from 'htmr';
//

function Post(post) {
  return (
    <div>
      <h3>{post.title}</h3>
      {convert(post.contents)}
    </div>
  );
}
function Draft(draft) {
  return (
    <div>
      <h3>Draft: {draft.title}</h3>
      {convert(draft.contents)}
    </div>
  );
}

export default withRouteData(({ post, draft }) => {
  return post ? Post(post) : Draft(draft);
});
