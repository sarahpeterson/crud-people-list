import React from 'react';

export default ({ backgroundColor, text, color }) => (
  <button
    style={{
      width: 125,
      height: 35,
      borderRadius: 25,
      borderColor: 'transparent',
      backgroundColor,
      color,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '1px 3px #ccc'
    }}
  >
    <p
      style={{
        margin: 0,
        padding: 0
      }}
    >
      {text}
    </p>
  </button>
)
