import PropTypes from 'prop-types';
import PageContainer from './PageContainer';
import { TitleContainer, HeadingContainer } from './Grid';
import { H1, H2 } from '../typography/Headings';

export default function IndexPageTemplate({ blogPosts, pageTitle, pageHeading }) {
  return (
    <PageContainer title="Blog" description="" keywords="">
      <TitleContainer>
        <H1>{pageTitle}</H1>
      </TitleContainer>
      <HeadingContainer>
        <H2>{pageHeading}</H2>
      </HeadingContainer>
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
