import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { H2 } from '../typography/Headings';
import Paragraph from '../typography/Paragraph';
import Modal from '../Modal';

import theme from '../theme';

const darkBackground = css`
  background-color: ${theme.colour.black};
`;

const LargeImage = styled(GatsbyImage)`
  max-height: 70vh;
  margin: ${theme.spacing.units(2)} 0;
  img {
    object-fit: contain !important;
    max-height: 70vh;
    box-sizing: border-box;
  }
`;

const Title = styled(H2)`
  display: flex;
  align-items: center;
`;

export default function LargeImageModal({
  open,
  onClickOutside,
  onCloseClick,
  image,
}) {
  return (
    <Modal
      open={open}
      onClickOutside={onClickOutside}
      onCloseClick={onCloseClick}
      contentContainerStyles={darkBackground}
    >
      <Title smallOnMobile>{image.title}</Title>
      <LargeImage image={image.img} alt={image.description} />
      <Paragraph smallOnMobile>{image.description}</Paragraph>
    </Modal>
  );
}

LargeImageModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClickOutside: PropTypes.func.isRequired,
  onCloseClick: PropTypes.func.isRequired,
  image: PropTypes.shape({
    description: PropTypes.string,
    title: PropTypes.string,
    publicURL: PropTypes.string,
    // eslint-disable-next-line react/forbid-prop-types
    img: PropTypes.object,
  }).isRequired,
};
