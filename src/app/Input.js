import React from 'react';
import './Input.css';

const Input = ({ value, onChange }) => (
  <textarea id="markdown-input" value={value} onChange={onChange} autoFocus />
);

export default Input;
