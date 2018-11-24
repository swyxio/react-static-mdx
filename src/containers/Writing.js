import React from 'react';
import { withRouteData, Link } from 'react-static';
//

export default withRouteData(({ posts, drafts }) => (
  <div>
    <h1>My Writing</h1>
    <br />
    <h2>All Essays</h2>
    <em>
      essays that are pretty much final although I reserve the right to tweak
      words.
    </em>
    <ul>
      {posts.map(post => (
        <li key={post.slug}>
          <Link to={`/writing/${post.slug}/`}>{post.title}</Link>
        </li>
      ))}
    </ul>
    <h2>Draft Essays</h2>
    <em>posts that are incomplete but I am drafting in the open</em>
    <ul>
      {drafts.map(draft => (
        <li key={draft.slug}>
          <Link to={`/writing/draft/${draft.slug}/`}>{draft.title}</Link>
        </li>
      ))}
    </ul>
  </div>
));
