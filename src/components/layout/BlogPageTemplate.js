import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import PageContainer from './PageContainer';

import Link from '../Link';
import { H2 } from '../typography/Headings';
import { Grid } from './Grid';

import theme from '../theme';

const BlogPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: ${theme.spacing.units(4)} 0;
  padding: ${theme.spacing.units(4)};
  border: 1px solid ${theme.colour.primary};
  border-radius: ${theme.spacing.units(1)};
`;

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
      <Grid>
        {blogPosts.map(({ id, title, slug }) => (
          <BlogPostContainer key={id}>
            <H2>{title}</H2>
            <Link tabIndex={0} href={`/blog/${slug}`}>
              {`Read more of ${title}...`}
            </Link>
          </BlogPostContainer>
        ))}
      </Grid>
    </PageContainer>
  );
}

IndexPageTemplate.propTypes = {
  blogPosts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    rawMarkdownBody: PropTypes.string,
    date: PropTypes.string,
  })).isRequired,
  pageTitle: PropTypes.string.isRequired,
  pageHeading: PropTypes.string.isRequired,
};
