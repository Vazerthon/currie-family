import styled from '@emotion/styled';
import theme from '../theme';

export const Grid = styled.div`
  max-width: 1440px;
  display: grid;
  padding: ${theme.spacing.units(4)};
  margin: 0 auto;
  grid-template-columns: 1fr;
  grid-template-areas:
    'title'
    'heading'
    'about'
    'gallery';
`;

export const TitleContainer = styled.div`
  grid-area: title;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  text-align: right;
  color: ${theme.colour.primary};
`;

export const HeadingContainer = styled.div`
  grid-area: heading;
  display: flex;
  flex-direction: row-reverse;
  text-align: right;
`;

export const AboutContainer = styled.div`
  grid-area: about;
`;

export const GalleryContainer = styled.div`
  grid-area: gallery;
`;
