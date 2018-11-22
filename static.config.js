import { reloadRoutes } from 'react-static/node';
import chokidar from 'chokidar';

chokidar.watch('content').on('all', () => reloadRoutes());

// above is just for reloading
// below is meat of static.config.js

const path = require('path');
const { getContent, injectContentIntoTemplates } = require('./lib'); // the little library we are building

export default {
  getSiteData: () => ({
    title: 'React Static'
  }),
  getRoutes: async () => {
    const content = await getContent();
    const routes = await injectContentIntoTemplates(content);
    // console.log(routes);
    return [
      ...routes,
      {
        is404: true,
        component: 'src/templates/404'
      }
    ];
  },
  webpack: config => {
    config.resolve.alias = {
      '@components': path.resolve(__dirname, 'components/'),
      '@lib': path.resolve(__dirname, 'lib/'),
      '@mdx': path.resolve(__dirname, '.mdx/')
    };

    config.module.rules.map(rule => {
      if (
        typeof rule.test !== 'undefined' ||
        typeof rule.oneOf === 'undefined'
      ) {
        return rule;
      }

      rule.oneOf.unshift({
        test: /.mdx$/,
        use: ['babel-loader', '@mdx-js/loader']
      });

      return rule;
    });
    return config;
  }
};
