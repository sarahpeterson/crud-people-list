import React from 'react';
import Button from '../common/Button';

export default ({ person, edit }) => (
  <div
    style={{
      boxShadow: '6px 6px 54px rgba(0, 0, 0, 0.05)',
      borderRadius: 10,
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: 1078,
      height: 112,
      marginTop: 20,
      paddingRight: 10
    }}
  >
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
      }}
    >
      <p
        style={{
          // fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: 18,
          // lineHeight: 22,
          color: '#00234B',
          margin: 0,
          padding: 0
        }}
      >
        {person.name}
      </p>
      <p
        style={{
          // fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: 14,
          // lineHeight: 22,
          color: '#778CA3',
          margin: 0,
          padding: 0
        }}
      >
        {person.birthday}
      </p>
    </div>
    <div
      style={{ flex: 1 }}
    >
      <p>
        {person.title}
      </p>
    </div>
    <div
      style={{ flex: 1 }}
    >
      <p>
        {person.country}
      </p>
    </div>
    <div
      style={{ flex: 1 }}
    >
      <p>
        {person.salary} per year
      </p>
    </div>
    <Button btnClick={() => edit(person.id)} text="Edit" backgroundColor="#fff" border="2px solid rgba(98, 77, 227, 0.3)" width={143} />
  </div>
)
