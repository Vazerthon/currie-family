import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import IndexPageTemplate from '../components/layout/IndexPageTemplate';

const capitaliseFirstLetter = (string) => (string.replace(/^\w/, (c) => c.toUpperCase()));
const capitaliseAllWords = (string) => string.replace(/\w\S*/g, capitaliseFirstLetter);

export default function IndexPage({ data }) {
  const pageData = data.pageData.edges[0].node;
  const {
    title,
    heading,
    about,
  } = pageData.frontmatter;

  const galleryData = data.galleryData?.edges || [];
  const gallery = galleryData.map(({ node }) => ({
    small: node.frontmatter.small.childImageSharp.gatsbyImageData,
    large: node.frontmatter.large.childImageSharp.gatsbyImageData,
    title: node.frontmatter.title,
    description: node.frontmatter.description,
    id: node.id,
    tags: node.frontmatter.tags?.map(capitaliseAllWords) || [],
    publicURL: node.frontmatter.large.publicURL,
  }));

  return (
    <IndexPageTemplate
      title={title}
      heading={heading}
      about={about}
      gallery={gallery}
    />
  );
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    pageData: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string,
              heading: PropTypes.string,
              about: PropTypes.string,
            }),
          }),
        }),
      ),
    }),
    galleryData: PropTypes.shape({
      // eslint-disable-next-line react/forbid-prop-types
      edges: PropTypes.array,
    }),
  }).isRequired,
};

export const pageQuery = graphql`query IndexPageTemplate {
  pageData: allMarkdownRemark(
    filter: {frontmatter: {queryKey: {eq: "main-page"}}}
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
    filter: {frontmatter: {queryKey: {eq: "gallery-picture"}}}
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
              gatsbyImageData(
                layout: FULL_WIDTH
                formats: [AUTO, WEBP]
              )
            }
          }
        }
      }
    }
  }
}
`;
