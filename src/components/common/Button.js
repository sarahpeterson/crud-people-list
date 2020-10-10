import React from 'react';

export default ({ backgroundColor, text, color, width, border, boxShadow, btnClick }) => (
  <button
    style={{
      width,
      height: 45,
      borderColor: 'transparent',
      backgroundColor,
      color,
      border,
      boxShadow,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      // boxShadow: '0px 6px 12px rgba(98, 77, 227, 0.3)',
      borderRadius: 50
    }}
    onClick={() => btnClick()}
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
