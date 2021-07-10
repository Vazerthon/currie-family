import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import PageContainer from './PageContainer';

import { Grid } from './Grid';
import { H2 } from '../typography/Headings';

import theme from '../theme';

export default function BlogPostTemplate({ post, pageTitle, pageHeading }) {
  return (
    <PageContainer
      title={post.title}
      description=""
      keywords=""
      pageTitle={pageTitle}
      pageHeading={pageHeading}
    >
      <Grid>
        <H2>
          {post.title}
        </H2>
      </Grid>
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
