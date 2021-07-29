import PropTypes from 'prop-types';
import BlogPostTemplate from '../components/layout/BlogPostTemplate';

export default function BlogPost({
  pageContext: { post, pageTitle, pageHeading },
}) {
  return (
    <BlogPostTemplate
      post={post}
      pageTitle={pageTitle}
      pageHeading={pageHeading}
    />
  );
}

BlogPost.propTypes = {
  pageContext: PropTypes.shape({
    post: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      rawMarkdownBody: PropTypes.string,
      date: PropTypes.string,
    }),
    pageTitle: PropTypes.string.isRequired,
    pageHeading: PropTypes.string.isRequired,
  }).isRequired,
};
