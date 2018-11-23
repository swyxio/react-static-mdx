import React from 'react';
import { withRouteData, Link } from 'react-static';
//

export default withRouteData(({ posts, drafts }) => (
  <div>
    <h1>It's blog time.</h1>
    <br />
    All Posts:
    <ul>
      {posts.map(post => (
        <li key={post.slug}>
          <Link to={`/blog/${post.slug}/`}>{post.title}</Link>
        </li>
      ))}
    </ul>
    Draft Posts:
    <ul>
      {drafts.map(draft => (
        <li key={draft.slug}>
          <Link to={`/blog/draft/${draft.slug}/`}>{draft.title}</Link>
        </li>
      ))}
    </ul>
  </div>
));
