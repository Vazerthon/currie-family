import PropTypes from 'prop-types';
import PageContainer from './PageContainer';
import Gallery from '../Gallery/Gallery';
import { Grid, AboutContainer, GalleryContainer } from './Grid';

import Paragraph from '../typography/Paragraph';
import { H3 } from '../typography/Headings';

export default function IndexPageTemplate({ title, heading, about, gallery }) {
  return (
    <PageContainer
      title={title}
      description=""
      keywords=""
      pageHeading={heading}
      pageTitle={title}
    >
      <Grid>
        <AboutContainer>
          <H3 id="about">About</H3>
          {about.split('\n').map((paragraph) => (
            <Paragraph key={paragraph}>{paragraph}</Paragraph>
          ))}
        </AboutContainer>
        <GalleryContainer>
          <H3 id="gallery">Gallery</H3>
          <Gallery images={gallery} />
        </GalleryContainer>
      </Grid>
    </PageContainer>
  );
}

IndexPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  gallery: PropTypes.array.isRequired,
};
