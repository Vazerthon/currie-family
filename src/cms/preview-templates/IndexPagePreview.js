import PropTypes from 'prop-types';
import IndexPageTemplate from '../../components/layout/IndexPageTemplate';

const IndexPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <IndexPageTemplate
        title={data.title}
        heading={data.heading}
        about={data.about}
        gallery={[]}
      />
    );
  }
  return <div>Loading...</div>;
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }).isRequired,
};

export default IndexPagePreview;
