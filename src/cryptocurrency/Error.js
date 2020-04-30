import '../styles/Error.scss';

import React from 'react';
import PropTypes from 'prop-types';

const Error = ({error}) => (
  <div className="error">
    Error: {error}
  </div>
)


Error.propTypes = {
  error: PropTypes.string
}

export default Error;
