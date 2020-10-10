import React from 'react';

export default ({ headline, subHeadline }) => (
  <div>
    <p
      style={{
        fontFmaily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 26,
        lineHeight: 31,
        color: '#00234B'
      }}
    >
      {headline}
    </p>
    {subHeadline ? <p>
      {subHeadline}
    </p> : null}
  </div>
)
