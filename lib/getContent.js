const path = require('path');
const klaw = require('klaw');
const matter = require('gray-matter');
const fs = require('fs');
const fsPath = require('fs-path');
const mdx = require('@mdx-js/mdx');

const pathToContent = path.resolve(__dirname, '../content');
const pathToMDX = path.resolve(__dirname, '../.mdx');
export default function getContent() {
  const items = [];
  const getFiles = () =>
    new Promise(resolve => {
      if (fs.existsSync(pathToContent)) {
        klaw(pathToContent)
          .on('data', item => {
            // Filter function to retrieve .md files //
            if (['.md', '.mdx'].includes(path.extname(item.path))) {
              // If markdown file, read contents //
              const mdxText = fs.readFileSync(item.path, 'utf8');
              const frontmatter = matter(mdxText);
              // Create slug for URL //
              const title =
                frontmatter.data.title || `untitled_${hashCode(item.path)}`;
              frontmatter.data.slug = title
                .toLowerCase()
                .replace(/ /g, '-')
                .replace(/[^\w-]+/g, '');
              // Remove unused key //
              delete frontmatter.orig;
              const ppath = path.parse(path.relative(pathToContent, item.path));
              frontmatter.parsedPath = ppath;
              const writePath = `${pathToMDX}/${ppath.dir}/${ppath.name}.js`;
              fsPath.writeFileSync(writePath, mdx.sync(mdxText));
              // Push object into items array //
              items.push(frontmatter);
            }
          })
          .on('error', e => {
            console.log(e);
          })
          .on('end', () => {
            // Resolve promise for async getRoutes request //
            // posts = items for below routes //

            // split by dirs
            const content = {};
            items.forEach(item => {
              const dir = item.parsedPath.dir;
              if (content[dir]) {
                content[dir].push(item);
              } else {
                content[dir] = [item];
              }
            });
            // console.log(content);
            resolve(content);
          });
      } else {
        // If src/posts directory doesn't exist, return items as empty array //
        resolve(items);
      }
    });
  return getFiles();
}

// https://stackoverflow.com/a/8831937/1106414
function hashCode(str) {
  let hash = 0;
  if (str.length === 0) return hash;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    /* eslint-disable-next-line */
    hash = (hash << 5) - hash + char;
    /* eslint-disable-next-line */
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash.toString(16).slice(-4); // last4hex
}
