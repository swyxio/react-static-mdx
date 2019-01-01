import React from 'react';
import { withRouteData, Link } from 'react-static';

import { Helmet } from 'react-helmet';
import Signup from './Signup';

const sortFn = (a, b) => new Date(a.date) - new Date(b.date);
export default withRouteData(({ posts, drafts }) => (
  <section className="row padding padding-size-large">
    <Helmet>
      <meta charSet="utf-8" />
      <title>swyx.io | Writing</title>
      <link rel="canonical" href="https://swyx.io/writing" />
    </Helmet>
    <aside className="column column-size-large-3 column-size-small-12">
      <h1>My Writing</h1>
    </aside>
    <div className="column column-size-large-6 column-size-small-12 writing-page__content">
      <h2>All Essays</h2>
      <em>
        essays that are pretty much final although I reserve the right to tweak
        words.
      </em>
      <hr />
      <ul>
        {posts.sort(sortFn).map(post => (
          <li key={post.slug}>
            <Link to={`/writing/${post.slug}/`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <Signup />
    </div>
    <aside className="column column-size-large-3 column-size-small-12 writing-page__sidebar-right">
      <div>
        <h2>Draft Essays</h2>
        <em>posts that are incomplete but I am drafting in the open</em>
      </div>
      <hr />
      <ul>
        {drafts.map(draft => (
          <li key={draft.slug}>
            <Link to={`/writing/draft/${draft.slug}/`}>{draft.title}</Link>
          </li>
        ))}
      </ul>
    </aside>
  </section>
));
