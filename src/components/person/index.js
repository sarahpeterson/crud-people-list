import React from 'react';
import Button from '../common/Button';
import './styles.css';

export default ({ person, edit }) => (
  <div className="person-container">
    <div className="person-data">
      <p className="person-name">
        {person.name}
      </p>
      <p className="person-birthday">
        {person.birthday}
      </p>
    </div>
    <div className="person-spacing">
      <p>
        {person.title}
      </p>
    </div>
    <div className="person-spacing">
      <p>
        {person.country}
      </p>
    </div>
    <div className="person-spacing">
      <p>
        {person.salary} per year
      </p>
    </div>
    <Button
      btnClick={() => edit(person.id)}
      text="Edit"
      backgroundColor="#fff"
      border="2px solid rgba(98, 77, 227, 0.3)"
      boxShadow=""
      width={143}
    />
  </div>
)
