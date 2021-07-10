import PropTypes from 'prop-types';

import BlogPageTemplate from '../components/layout/BlogPageTemplate';

export default function BlogPage({ pageContext }) {
  return <BlogPageTemplate blogPosts={pageContext.posts} />;
}

BlogPage.propTypes = {
  pageContext: PropTypes.shape({
    posts: PropTypes.arrayOf({
      id: PropTypes.string,
      title: PropTypes.string,
      rawMarkdownBody: PropTypes.string,
      date: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
