import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PeopleTable from './components/peopleTable';
import Edit from './components/edit';
import {people} from './components/peopleTable/peopleData';

function App() {
  const [newList, updatePeople] = useState(people);
  const [add, addPerson] = useState(false);
  const [edit, editPerson] = useState('');
  return (
    <div style={{ backgroundColor: '#F4F7FC', height: '200vh' }}>
    {add || edit !== '' ?
      <Edit
        edit={() => editPerson(true)}
        editing={edit}
        current={newList}
        btnClick={(newPerson) => {
          updatePeople(newPerson)
          addPerson(false);
          editPerson('')
        }}
      /> :
      <PeopleTable
        newPeople={newList}
        btnClick={() => addPerson(true)}
        edit={(id) => editPerson(id)}
      />}
    </div>
  );
}

export default App;
