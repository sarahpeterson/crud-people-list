import React from 'react';
import './styles.css';

export default ({ account }) => (
  <div className="account-container">
    <div className="account-icon" />
    <div className="text-section">
      <p className="account-text">
        {account.name}
      </p>
      <p className="account-text" style={{ color: '#778CA3', textAlign: 'left' }}>
        {account.type}
      </p>
    </div>
  </div>
)
