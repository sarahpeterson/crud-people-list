import React, { useState } from 'react';
import Person from '../person';
import Button from '../common/Button';
import Header from '../common/Header';
import Account from '../account';
import PeopleCount from '../person/peopleCount';
import {people} from './peopleData';

export default ({ btnClick, edit, newPeople }) => {
  const [peopleList, updatePeople] = useState(newPeople)
  console.log('people list', peopleList)
  const listPeople = peopleList.map((p) => (
    <Person
      person={p}
      edit={(id) => edit(id)}
    />
  ))
  return (
    <div>
      <Account
        account={{ name: 'Julie Howard', type: 'Admin' }}
      />
      <div
        style={{
          flexDirection: 'row',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginLeft: 10,
          marginRight: 10
        }}
      >
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
      {listPeople}
      </div>
    </div>
  )
}
