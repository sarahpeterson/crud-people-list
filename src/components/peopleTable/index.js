import React, { useState } from 'react';
import Person from '../person';
import Button from '../common/Button';
import Header from '../common/Header';
import {people} from './peopleData';

export default () => {
  const [newPeople, updatePeople] = useState(people)
  const listPeople = newPeople.map((p) => (
    <Person
      person={p}
    />
  ))
  return (
    <div>
      <Header
        headline="People"
      />
      <Button
        backgroundColor="#624DE3"
        text="Add People"
        color="#fff"
      />
      {listPeople}
    </div>
  )
}
