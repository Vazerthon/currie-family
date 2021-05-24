import styled from '@emotion/styled';
import media from 'css-in-js-media';
import theme from '../theme';

const Paragraph = styled.p`
  margin: 0;
  font-size: ${theme.spacing.units(4)};
  line-height: ${theme.spacing.units(6)};

  ${({ smallOnMobile }) => smallOnMobile && media('<=tablet')} {
    font-size: ${theme.spacing.units(3)};
    line-height: ${theme.spacing.units(4)};
  }
`;

export default Paragraph;
