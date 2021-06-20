const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  // main page
  createPage({
    path: '/',
    component: path.resolve('src/templates/index-page.js'),
  });

  // blog list
  createPage({
    path: '/blog',
    component: path.resolve('src/templates/blog-page.js'),
  });

  // blog pages
  const blogPosts = await graphql(`
    query BlogPageTemplate {
      blogPosts: allMarkdownRemark(
        filter: { frontmatter: { queryKey: { eq: "blog-post" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  const blogPostNodes = blogPosts.data.blogPosts.edges.map(({ node }) => node);

  blogPostNodes.forEach((node) => {
    createPage({
      path: `blog/${node.id}`,
      component: path.resolve('src/templates/blog-post.js'),
      context: {
        title: 'x',
      },
    });
  });
};
