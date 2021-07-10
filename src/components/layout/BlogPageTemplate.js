import PropTypes from 'prop-types';
import PageContainer from './PageContainer';

export default function IndexPageTemplate({
  blogPosts,
  pageTitle,
  pageHeading,
}) {
  return (
    <PageContainer
      title="Blog"
      description=""
      keywords=""
      pageTitle={pageTitle}
      pageHeading={pageHeading}
    >
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
  pageTitle: PropTypes.string.isRequired,
  pageHeading: PropTypes.string.isRequired,
};
