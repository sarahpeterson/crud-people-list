import React from 'react';
import './styles.css';

export default ({ count }) => (
  <span className="count-container">
    <p className="count-text">
      {count} employees
    </p>
  </span>
)
