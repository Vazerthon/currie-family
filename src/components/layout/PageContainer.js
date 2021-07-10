import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet';
import { Global, css } from '@emotion/react';

import Link from '../Link';
import { TitleContainer, HeadingContainer } from './Grid';
import { H1, H2 } from '../typography/Headings';

import theme from '../theme';

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid ${theme.colour.primary};
  margin-bottom: ${theme.spacing.units(2)};
`;

export default function PageContainer({
  children,
  title,
  description,
  keywords,
  pageTitle,
  pageHeading,
}) {
  return (
    <>
      <Global
        styles={css`
          html {
            font-family: ${theme.typography.fontFamilyBody};
            font-size: ${theme.typography.baseFontSizePx}px;
            line-height: ${theme.spacing.units(8)};
            box-sizing: border-box;
            body {
              margin: 0;
              background-color: ${theme.colour.secondary};
              color: ${theme.colour.white};
            }
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>
      <Nav>
        <Link tabIndex={0} href="/">Home</Link>
        <Link tabIndex={0} href="/blog">Blog</Link>
      </Nav>
      <TitleContainer>
        <H1 id="home">{pageTitle}</H1>
      </TitleContainer>
      <HeadingContainer>
        <H2>{pageHeading}</H2>
      </HeadingContainer>
      {children}
    </>
  );
}

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
  pageTitle: PropTypes.string.isRequired,
  pageHeading: PropTypes.string.isRequired,
};
