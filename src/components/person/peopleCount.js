import React from 'react';
import './styles.css';

export default ({ count }) => (
  <div className="count-container">
    <p className="count-text">
      {count} employees
    </p>
  </div>
)
