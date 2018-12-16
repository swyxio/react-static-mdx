import React from 'react';
import { withRouteData } from 'react-static';
import convert from 'htmr';

export default withRouteData(
  class extends React.Component {
    render() {
      const { currentprojects, intro, opensource } = this.props;
      return (
        <section className="row padding padding-size-large">
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
