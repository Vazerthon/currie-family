import PropTypes from 'prop-types';
import PageContainer from './PageContainer';

export default function IndexPageTemplate({ blogPosts }) {
  console.log(blogPosts);
  return (
    <PageContainer title="Blog" description="" keywords="">
      Blog
    </PageContainer>
  );
}

IndexPageTemplate.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  blogPosts: PropTypes.array.isRequired,
};
