import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PeopleTable from './components/peopleTable';
import Edit from './components/edit';

function App() {
  const [people, showPeople] = useState(true);
  const [add, addPerson] = useState(true);
  const [edit, editPerson] = useState(false);
  return (
    <div style={{ backgroundColor: '#F4F7FC', height: '200vh' }}>
    {add ? <Edit edit={edit} /> :
      <PeopleTable
        btnClick={() => addPerson(true)}
        edit={() => editPerson(true)}
      />}
    </div>
  );
}

export default App;
