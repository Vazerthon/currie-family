import PropTypes from 'prop-types';
import PageContainer from './PageContainer';

export default function BlogPostTemplate({ post, pageTitle, pageHeading }) {
  return (
    <PageContainer
      title={post.title}
      description=""
      keywords=""
      pageTitle={pageTitle}
      pageHeading={pageHeading}
    >
      {post.title}
    </PageContainer>
  );
}

BlogPostTemplate.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    rawMarkdownBody: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
  pageTitle: PropTypes.string.isRequired,
  pageHeading: PropTypes.string.isRequired,
};
