import React from 'react';

export default ({ account }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'flex-end',
      // alignItems: 'center',
      flexDirection: 'row',
      // position: 'relative',
      // width: '100%',
      backgroundColor: '#fff',
      padding: 10
    }}
  >
    <div
      style={{
        // position: 'absolute',
        // left: 0,
        // right: 0,
        // top: 0,
        // bottom: 0,
        background: '#FFE8DF',
        width: 36,
        height: 36,
        borderRadius: 36/2
      }}
    />
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 20
      }}
    >
      <p
        style={{
          margin: 0,
          padding: 0
        }}
      >
        {account.name}
      </p>
      <p
        style={{
          margin: 0,
          padding: 0
        }}
      >
        {account.type}
      </p>
    </div>
  </div>
)
