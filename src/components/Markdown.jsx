/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

import { H2 } from './typography/Headings';
import Paragraph from './typography/Paragraph';
import Link from './Link';

const UnorderedList = styled.ul`
  margin: 0;
`;

const ListItem = styled.li``;

export const components = {
  p: Paragraph,
  h1: H2, // all headings as h2s to avoid multiple high level headings
  h2: H2,
  h3: H2,
  a: Link,
  ul: UnorderedList,
  li: ListItem,
};

function Markdown({ source }) {
  return <ReactMarkdown components={components}>{source}</ReactMarkdown>;
}

Markdown.propTypes = {
  source: PropTypes.string.isRequired,
};

export default Markdown;
