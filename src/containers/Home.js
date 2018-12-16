import React from 'react';
import { withRouteData } from 'react-static';
import convert from 'htmr';
import { Helmet } from 'react-helmet';

export default withRouteData(
  class extends React.Component {
    render() {
      const { currentprojects, intro, opensource } = this.props;
      return (
        <section className="row padding padding-size-large">
          <Helmet>
            <meta charSet="utf-8" />
            <title>swyx.io | Home</title>
            <link rel="canonical" href="http://swyx.io" />
          </Helmet>
          <div className="column column-size-large-6 column-size-small-12">
            {convert(intro.contents)}
            {convert(opensource.contents)}
            {convert(currentprojects.contents)}
          </div>
        </section>
      );
    }
  }
);
