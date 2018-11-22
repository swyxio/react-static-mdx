import React from 'react';
import { withRouteData } from 'react-static';
import convert from 'htmr';

export default withRouteData(
  class extends React.Component {
    // state = { Thing: null };
    // componentDidMount = async () => {
    //   const Thing = await import(path);
    //   this.setState({ Thing });
    // };
    // componentDidMount = () => {
    //   const path = '../Test.mdx';
    //   import(path).then(Thing => this.setState({ Thing: Thing.default }));
    // };

    render() {
      const { currentprojects, intro, opensource } = this.props;
      return (
        <div>
          <section>{convert(intro.contents)}</section>
          <section>{convert(opensource.contents)}</section>
          <section>{convert(currentprojects.contents)}</section>
        </div>
      );
    }
  }
);
