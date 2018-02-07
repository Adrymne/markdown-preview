import React from 'react';

const SourceLink = () => (
  <React.Fragment>
    View source on <a href={process.env.REACT_APP_SOURCE}>GitHub</a>
  </React.Fragment>
);

export default SourceLink;
