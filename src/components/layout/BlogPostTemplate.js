import PropTypes from 'prop-types';
import PageContainer from './PageContainer';
import { TitleContainer, HeadingContainer } from './Grid';
import { H1, H2 } from '../typography/Headings';

export default function BlogPostTemplate({ post, pageTitle, pageHeading }) {
  return (
    <PageContainer title={post.title} description="" keywords="">
      <TitleContainer>
        <H1>{pageTitle}</H1>
      </TitleContainer>
      <HeadingContainer>
        <H2>{pageHeading}</H2>
      </HeadingContainer>
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
