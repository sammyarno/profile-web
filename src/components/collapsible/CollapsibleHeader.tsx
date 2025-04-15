import PropTypes from 'prop-types';

const CollapsibleHeader = ({ company, duration }) => (
  <h5 className="header rounded py-2 px-3 text-primary">
    {company}
    {' '}
    <small className="text-muted">
      (
      {duration}
      )
    </small>
  </h5>
);

CollapsibleHeader.propTypes = {
  company: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};

export default CollapsibleHeader;
