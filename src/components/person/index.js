import React from 'react';
import Button from '../common/Button';
import './styles.css';

export default ({ person, edit }) => (
  <tr data-testid="person">
    <td>
      <p className="person-name">
        {person.name}
      </p>
      <p className="person-birthday">
        {person.birthday}
      </p>
    </td>
    <td>
      <p className="person-data">
        {person.title}
      </p>
    </td>
    <td>
      <p className="person-data">
        {person.country}
      </p>
    </td>
    <td>
      <p className="person-data">
        {person.salary}
        <span className="salary-year">  per year</span>
      </p>
    </td>
    <td>
      <Button
        disabled={false}
        btnClick={() => edit(person.id)}
        text="Edit"
        backgroundColor="#fff"
        border="2px solid rgba(98, 77, 227, 0.3)"
        boxShadow=""
        width={143}
      />
    </td>
  </tr>
)
