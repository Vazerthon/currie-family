import PropTypes from 'prop-types';

import PageContainer from './PageContainer';

export default function BlogPostTemplate({ post }) {
  return (
    <PageContainer title="Blog post" description="" keywords="">
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
};
