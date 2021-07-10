import PropTypes from 'prop-types';
import PageContainer from './PageContainer';

export default function IndexPageTemplate({ blogPosts }) {
  return (
    <PageContainer title="Blog" description="" keywords="">
      {blogPosts.map(({ id, title, slug }) => (
        <div key={id}>
          <h2>{title}</h2>
          <a href={`/blog/${slug}`}>{title}</a>
        </div>
      ))}
    </PageContainer>
  );
}

IndexPageTemplate.propTypes = {
  blogPosts: PropTypes.arrayOf({
    id: PropTypes.string,
    title: PropTypes.string,
    rawMarkdownBody: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
};
