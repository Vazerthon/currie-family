const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  // main page data
  const mainPageData = await graphql(`
    query IndexPageTemplate {
      pageData: allMarkdownRemark(
        filter: { frontmatter: { queryKey: { eq: "main-page" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              heading
              about
            }
          }
        }
      }
      galleryData: allMarkdownRemark(
        filter: { frontmatter: { queryKey: { eq: "gallery-picture" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              description
              tags
              small: image {
                childImageSharp {
                  gatsbyImageData(
                    width: 240
                    layout: FIXED
                    formats: [AUTO, WEBP]
                  )
                }
              }
              large: image {
                publicURL
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, WEBP])
                }
              }
            }
          }
        }
      }
    }
  `);

  // blog page data
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

  const {
    title: pageTitle,
    heading: pageHeading,
  } = mainPageData.data.pageData.edges[0].node.frontmatter;

  const blogPostData = blogPosts.data.blogPosts.edges
    .map(({ node }) => node)
    .map(({ frontmatter: { title, date }, id, rawMarkdownBody }) => ({
      id,
      title,
      date,
      rawMarkdownBody,
      slug: title.toLowerCase().replaceAll(' ', '-'),
    }));

  // individual blog pages
  blogPostData.forEach((post) => {
    createPage({
      path: `blog/${post.slug}`,
      component: path.resolve('src/templates/blog-post.js'),
      context: {
        post,
        pageTitle,
        pageHeading,
      },
    });
  });

  // blog list
  createPage({
    path: '/blog',
    component: path.resolve('src/templates/blog-page.js'),
    context: {
      posts: blogPostData,
      pageTitle,
      pageHeading,
    },
  });

  // main page
  createPage({
    path: '/',
    component: path.resolve('src/templates/index-page.js'),
    context: mainPageData,
  });
};
