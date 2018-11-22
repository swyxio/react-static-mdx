import { reloadRoutes } from 'react-static/node';
import jdown from 'jdown';
import path from 'path';
import chokidar from 'chokidar';

chokidar.watch('content').on('all', () => reloadRoutes());

export default {
  getSiteData: () => ({
    title: 'React Static'
  }),
  getRoutes: async () => {
    const props = await jdown('content');
    const { posts, home, talks, talks2018 } = props;
    console.log(Object.keys(props.home));
    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => ({
          ...home
        })
      },
      {
        path: '/talks',
        component: 'src/containers/Talks',
        getData: () => ({
          talks
        })
      },
      {
        path: '/writing',
        component: 'src/containers/Writing',
        getData: () => ({
          posts
        }),
        children: posts.map(post => ({
          path: `/${post.slug}`,
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
    config.resolve.alias = {
      '@components': path.resolve(__dirname, 'components/')
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
