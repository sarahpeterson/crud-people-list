import React from 'react';

export default ({ count }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      position: 'absolute',
      left: '7%',
      top: '11%'
    }}
  >
    <p
      style={{
        margin: 0,
        padding: 0,
        fontWeight: 500,
        fontStyle: 'normal',
        fontSize: 13,
      }}
    >
      {count} employees
    </p>
  </div>
)
