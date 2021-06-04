import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import BlogPageTemplate from '../components/layout/BlogPageTemplate';

export default function BlogPage({ data }) {
  const blogPosts = data.blogPosts?.edges
    .map(({ node }) => node)
    .map((node) => ({
      id: node.id,
      title: node.frontmatter.title,
    })) || [];

  return <BlogPageTemplate blogPosts={blogPosts} />;
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    blogPosts: PropTypes.shape({
      // eslint-disable-next-line react/forbid-prop-types
      edges: PropTypes.array,
    }),
  }).isRequired,
};

export const pageQuery = graphql`
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
`;
