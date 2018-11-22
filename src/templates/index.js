import React from 'react';
import { withRouteData } from 'react-static';
// import convert from 'htmr';
// import MDX from '@mdx-js/runtime';
// var Component = eval(babel.transform('<div><MyComponent /></div>').code);

export default withRouteData(props => {
  console.log(props);
  const ppath = props.parsedPath;
  const path = `@mdx${ppath.dir ? `/${ppath.dir}` : ''}/${ppath.name}.js`;
  console.log({ path });
  // const MDXComponent = import(path); // eslint-disable-line import/no-dynamic-require
  return (
    <div>
      {/* <MDX>{props.content}</MDX> */}
      <div style={{ border: '1px solid red' }}>
        hi
        {/* <MDXComponent /> */}
      </div>
      {/* <section>{convert(reactStatic.contents)}</section>
    <section>{convert(jdown.contents)}</section> */}
    </div>
  );
});
