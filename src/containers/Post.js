import React from 'react';
import { withRouteData, Link } from 'react-static';
import convert from 'htmr';
import Signup from './Signup';

import { Helmet } from 'react-helmet';
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
  const desc = `A swyx.io essay: ${content.title}`;
  return (
    <section className="row padding padding-size-large">
      <Helmet>
        <meta charSet="utf-8" />
        <title>swyx.io | {content.title}</title>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={content.title} />
        <meta property="og:description" content={desc} />
        {/* <meta property="og:image" content="LINK TO THE IMAGE FILE" /> */}
        <meta
          property="og:url"
          content={`https://swyx.io/writing/${content.slug}`}
        />
        <meta property="og:site_name" content={`swyx.io | ${content.title}`} />
        <meta name="twitter:title" content={content.title} />
        <meta name="twitter:description" content={desc} />
        {/* <meta name="twitter:image" content="LINK TO IMAGE"> */}
        <meta name="twitter:site" content="@swyx" />
        <meta name="twitter:creator" content="@swyx" />
      </Helmet>
      <aside className="column column-size-large-3 column-size-small-12">
        <div
          style={{
            // top: 180,
            // left: 38,
            // width: 314,
            top: 180,
            position: 'sticky'
          }}
        >
          <h1>{content.title}</h1>
          <small>
            {new Date(content.date).toLocaleDateString() || 'date tbd'}
          </small>
        </div>
      </aside>
      <div className="column column-size-large-6 column-size-small-12">
        {post ? Post(post) : Draft(draft)}

        <Signup />
      </div>
    </section>
  );
});
