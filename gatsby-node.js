const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  // main page
  createPage({
    path: '/',
    component: path.resolve('src/templates/index-page.js'),
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
              date
            }
            rawMarkdownBody
          }
        }
      }
    }
  `);

  const blogPostData = blogPosts.data.blogPosts.edges
    .map(({ node }) => node)
    .map(({ frontmatter: { title, date }, id, rawMarkdownBody }) => ({
      id,
      title,
      date,
      rawMarkdownBody,
      slug: title.toLowerCase().replaceAll(' ', '-'),
    }));

  blogPostData.forEach((post) => {
    createPage({
      path: `blog/${post.slug}`,
      component: path.resolve('src/templates/blog-post.js'),
      context: post,
    });
  });

  // blog list
  createPage({
    path: '/blog',
    component: path.resolve('src/templates/blog-page.js'),
    context: {
      posts: blogPostData,
    },
  });
};
