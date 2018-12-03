import { reloadRoutes } from 'react-static/node';
import jdown from 'jdown';
import path from 'path';
import chokidar from 'chokidar';
import React, { Component } from 'react';

chokidar.watch('content').on('all', () => reloadRoutes());

export default {
  getSiteData: () => ({
    title: 'React Static'
  }),
  getRoutes: async () => {
    const props = await jdown('content');
    const { posts, drafts, home, talks, talks2018 } = props;
    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => ({
          ...home
        })
      },
      {
        path: '/talks/pending',
        component: 'src/containers/PendingTalks',
        getData: () => ({
          ...talks
        })
      },
      {
        path: '/talks',
        component: 'src/containers/Talks',
        getData: () => ({
          talks2018
        }),
        children: [
          ...talks2018.map(talk => ({
            path: `/${talk.slug}`,
            component: 'src/containers/Talk',
            getData: () => ({
              talk
            })
          }))
        ]
      },
      {
        path: '/writing',
        component: 'src/containers/Writing',
        getData: () => ({
          drafts,
          posts
        }),
        children: [
          ...posts.map(post => ({
            path: `/${post.slug}`,
            component: 'src/containers/Post',
            getData: () => ({
              post
            })
          })),
          ...drafts.map(draft => ({
            path: `/draft/${draft.slug}`,
            component: 'src/containers/Post',
            getData: () => ({
              draft
            })
          }))
        ]
      },
      {
        is404: true,
        component: 'src/containers/404'
      }
    ];
  },
  webpack: config => {
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
  },

  Document: class CustomHtml extends Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props;

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Cherry+Swash|Oxygen"
              rel="stylesheet"
            />
          </Head>
          <Body>{children}</Body>
        </Html>
      );
    }
  }
};
