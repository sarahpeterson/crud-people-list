import React from 'react';

export default ({ person }) => (
  <div>
    <div>
      <p
        style={{
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: 18,
          lineHeight: 22,
          color: '#00234B'
        }}
      >
        {person.name}
      </p>
      <p
        style={{
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: 14,
          lineHeight: 22,
          color: '#778CA3'
        }}
      >
        {person.bday}
      </p>
    </div>
    <div>
      <p>
        {person.title}
      </p>
    </div>
    <div>
      <p>
        {person.country}
      </p>
    </div>
    <div>
      <p>
        {person.salary} per year
      </p>
    </div>
  </div>
)
