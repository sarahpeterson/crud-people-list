import React, { useState } from 'react';
import Person from '../person';
import Button from '../common/Button';
import Header from '../common/Header';
import Account from '../account';
import PeopleCount from '../person/PeopleCount';
import './styles.css';

export default ({ btnClick, edit, newPeople }) => {
  const [peopleList, updatePeople] = useState([]);
  if (peopleList.length === 0) updatePeople(newPeople);
  const listPeople = peopleList.map((p) => (
    <Person
      key={p.id}
      person={p}
      edit={(id) => edit(id)}
    />
  ))
  return (
    <div>
      <Account
        account={{ name: 'Julie Howard', type: 'Admin' }}
      />
      <div className="table-container">
        <Header
          headline="People"
        />
        <PeopleCount count={peopleList.length} />
        <Button
          backgroundColor="#624DE3"
          text="Add Employee"
          boxShadow="0px 6px 12px rgba(98, 77, 227, 0.3)"
          border="transparent"
          color="#fff"
          width={181}
          btnClick={() => btnClick()}
        />
      </div>
      <div className="people-list">
        {listPeople}
      </div>
    </div>
  )
}
