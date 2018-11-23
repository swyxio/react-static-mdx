import React from 'react';
import { withRouteData, Link } from 'react-static';
import convert from 'htmr';
//

// const maybe = (x, fx) => x && fx(x);
const cap = str => str[0].toUpperCase() + str.slice(1);
const show = value =>
  value.startsWith('http') ? (
    <a href={value} rel="noopener noreferrer">
      {value}
    </a>
  ) : (
    <span>{value}</span>
  );
function showTalk(talk) {
  return Object.entries(talk).map(([k, v]) => {
    if (!v || k === 'slug') return null;
    return (
      <li key={k}>
        <strong>{cap(k)}</strong>: {show(v)}{' '}
      </li>
    );
  });
}
export default withRouteData(({ talk }) => (
  <div>
    <h3>{talk.title}</h3>
    <ul>{showTalk(talk)}</ul>
    {/* {convert(post.contents)} */}
  </div>
));
