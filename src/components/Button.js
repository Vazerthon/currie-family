import styled from '@emotion/styled';
import theme from './theme';

const Button = styled.button`
  background-color: ${theme.colour.secondary};
  border: none;
  color: ${theme.colour.primary};
  margin: ${theme.spacing.units(2)};
  font-size: ${theme.spacing.units(4)};
  font-family: ${theme.typography.fontFamilyHeading};
  text-align: left;
  cursor: pointer;
  width: max-content;
  text-transform: capitalize;
  
  :hover,
  :focus {
    transform: rotate(-3deg);
    text-decoration: underline ${theme.colour.white};
  }

  ${({ active }) =>
    active && `
      transform: rotate(-3deg);
      text-decoration: underline ${theme.colour.white};
    `}
`;

export default Button;
