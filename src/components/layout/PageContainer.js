import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Global, css } from '@emotion/react';

import theme from '../theme';

export default function PageContainer({
  children,
  title,
  description,
  keywords,
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
      {children}
    </>
  );
}

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
};
