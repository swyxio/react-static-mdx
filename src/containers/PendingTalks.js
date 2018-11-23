import React from 'react';
import { withRouteData, Link } from 'react-static';
import convert from 'htmr';

// export default withRouteData(({ bio, pending }) => (
export default withRouteData(props => {
  const { bio, pending } = props;
  return (
    <React.Fragment>
      <h3>Short Bio</h3>
      <div>{convert(bio.contents)}</div>
      <hr />
      <div>
        <h3>Pending</h3>
        <div>{convert(pending.contents)}</div>
      </div>
    </React.Fragment>
  );
});
