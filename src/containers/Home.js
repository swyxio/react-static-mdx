import React from 'react';
import { withRouteData } from 'react-static';
import convert from 'htmr';

export default withRouteData(
  class extends React.Component {
    state = { Thing: null };
    // componentDidMount = async () => {
    //   const Thing = await import(path);
    //   this.setState({ Thing });
    // };
    componentDidMount = () => {
      const path = '../Test.mdx';
      import(path).then(Thing => this.setState({ Thing: Thing.default }));
    };

    render() {
      const { jdown, reactStatic } = this.props;
      const { Thing } = this.state;
      console.log({ Thing });
      return (
        <div>
          {Thing && <Thing />}
          <section>{convert(reactStatic.contents)}</section>
          <section>{convert(jdown.contents)}</section>
        </div>
      );
    }
  }
);
