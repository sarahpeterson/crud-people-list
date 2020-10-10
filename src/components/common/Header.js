import React from 'react';

export default ({ headline, subHeadline }) => {
  const border = { borderBottom: '1px solid #EAEDF3' }
  const styles = { padding: 30 };
  const newStyle = subHeadline ? Object.assign(styles, border) : null;
  return (
    <div style={newStyle}>
      <p
        style={{
          // fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: 26,
          // lineHeight: 31,
          color: '#00234B',
          margin: 0,
          padding: 0
        }}
      >
        {headline}
      </p>
      {subHeadline ? <p style={{ marginTop: 10, padding: 0 }}>
        {subHeadline}
      </p> : null}
    </div>
  )
}
