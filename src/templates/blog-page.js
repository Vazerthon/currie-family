import PropTypes from 'prop-types';

import BlogPageTemplate from '../components/layout/BlogPageTemplate';

export default function BlogPage({ pageContext }) {
  return (
    <BlogPageTemplate
      blogPosts={pageContext.posts}
      pageTitle={pageContext.pageTitle}
      pageHeading={pageContext.pageHeading}
    />
  );
}

BlogPage.propTypes = {
  pageContext: PropTypes.shape({
    posts: PropTypes.arrayOf({
      id: PropTypes.string,
      title: PropTypes.string,
      rawMarkdownBody: PropTypes.string,
      date: PropTypes.string,
    }).isRequired,
    pageTitle: PropTypes.string.isRequired,
    pageHeading: PropTypes.string.isRequired,
  }).isRequired,
};
