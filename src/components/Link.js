import styled from '@emotion/styled';
import theme from './theme';

const Link = styled.a`
  color: ${theme.colour.primary};
  margin: 0 ${theme.spacing.units(2)};
  font-family: ${theme.typography.fontFamilyHeading};
  text-decoration: none;
  
  :hover,
  :focus {
    transform: rotate(-3deg);
    text-decoration: underline ${theme.colour.white};
  }
`;

export default Link;
