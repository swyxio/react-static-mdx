import React from 'react';
import { withRouteData } from 'react-static';
import convert from 'htmr';

export default withRouteData(
  class extends React.Component {
    render() {
      const { currentprojects, intro, opensource } = this.props;
      return (
        <section className="row padding padding-size-large">
          <div className="column column-size-large-9 column-size-small-12">
            {convert(intro.contents)}
          </div>
          <div className="column column-size-large-9 column-size-small-12">
            {convert(opensource.contents)}
          </div>
          <div className="column column-size-large-9 column-size-small-12">
            {convert(currentprojects.contents)}
          </div>
        </section>
      );
    }
  }
);
