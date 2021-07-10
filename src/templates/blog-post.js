import PropTypes from 'prop-types';
import BlogPostTemplate from '../components/layout/BlogPostTemplate';

export default function BlogPost({ pageContext }) {
  return <BlogPostTemplate post={pageContext} />;
}

BlogPost.propTypes = {
  pageContext: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    rawMarkdownBody: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
};
