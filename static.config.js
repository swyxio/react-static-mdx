import { reloadRoutes } from 'react-static/node';
import jdown from 'jdown';
import chokidar from 'chokidar';

chokidar.watch('content').on('all', () => reloadRoutes());

export default {
  getSiteData: () => ({
    title: 'React Static'
  }),
  getRoutes: async () => {
    const { posts, home, about } = await jdown('content');
    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => ({
          ...home
        })
      },
      {
        path: '/about',
        component: 'src/containers/About',
        getData: () => ({
          about
        })
      },
      {
        path: '/blog',
        component: 'src/containers/Blog',
        getData: () => ({
          posts
        }),
        children: posts.map(post => ({
          path: `/post/${post.slug}`,
          component: 'src/containers/Post',
          getData: () => ({
            post
          })
        }))
      },
      {
        is404: true,
        component: 'src/containers/404'
      }
    ];
  },
  webpack: config => {
    // console.log(config.module.rules);
    // config.module.rules.unshift({
    //   test: /.mdx?$/,
    //   use: ['babel-loader', '@mdx-js/loader']
    // });

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
    console.log(config.module.rules);
    return config;
  }
};
