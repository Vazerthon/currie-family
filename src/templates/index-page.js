import PropTypes from 'prop-types';

import IndexPageTemplate from '../components/layout/IndexPageTemplate';

const capitaliseFirstLetter = (string) => (string.replace(/^\w/, (c) => c.toUpperCase()));
const capitaliseAllWords = (string) => string.replace(/\w\S*/g, capitaliseFirstLetter);

export default function IndexPage({ pageContext: { data } }) {
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
  pageContext: PropTypes.shape({
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
    }),
  }).isRequired,
};
