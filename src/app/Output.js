import React from 'react';
import './Output.css';

const Output = ({ html }) => (
  <div id="output-root" dangerouslySetInnerHTML={{ __html: html }} />
);

export default Output;
