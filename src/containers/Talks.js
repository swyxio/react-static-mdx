import React from 'react';
import { withRouteData } from 'react-static';
import convert from 'htmr';
//

export default withRouteData(({ talks }) => (
  <div>{convert(talks.contents)}</div>
));
