import styled from '@emotion/styled';
import theme from './theme';

const Button = styled.button`
  background-color: ${theme.colour.black};
  border: none;
  color: ${theme.colour.primary};
  margin: ${theme.spacing.units(2)};
  font-size: ${theme.spacing.units(4)};
  text-align: left;
  cursor: pointer;
  width: max-content;

  :hover,
  :focus {
    transform: rotate(-3deg);
    text-decoration: underline ${theme.colour.secondary};
  }

  ${({ active }) =>
    active && `
      transform: rotate(-3deg);
      text-decoration: underline ${theme.colour.secondary};
    `}
`;

export default Button;
