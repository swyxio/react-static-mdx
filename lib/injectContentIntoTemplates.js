export default function injectContentIntoTemplates(content) {
  const routes = [];
  // for each category, make the template
  Object.entries(content).forEach(([k, arr]) => {
    const isIndex = k === '';
    const path = isIndex ? '/' : `/${k}`;
    if (isIndex) {
      arr.forEach(item => {
        // console.log(item.jsx);
        routes.push({
          path: `/${
            item.parsedPath.name === 'index' ? '' : item.parsedPath.name
          }`,
          component: `src/templates/index.js`,
          getData: () => ({
            ...item
          })
        });
      });
    } else {
      routes.push({
        path,
        component: `src/templates/${k}/index.js`,
        getData: () => ({
          posts: arr
        }),
        children:
          !isIndex &&
          arr.map(item => ({
            path: `${k}/${item.data.slug}`,
            component: `src/templates/${k}/single`,
            getData: () => ({
              ...item
            })
          }))
      });
    }
  });
  return routes;
}
