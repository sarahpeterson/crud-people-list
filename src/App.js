import React, { useState } from 'react';
import './App.css';
import PeopleTable from './components/peopleTable';
import Edit from './components/edit';
import { people } from './components/peopleTable/PeopleData';

const TEST = true;
const testing = TEST ? people : []

function App() {
  const [newList, updatePeople] = useState(testing);
  const [add, addPerson] = useState(false);
  const [edit, editPerson] = useState('');
  return (
    <div className="App">
      {add || edit !== '' ?
        <Edit
          edit={() => editPerson(true)}
          editing={edit}
          current={newList}
          cancel={() => {
            addPerson(false);
            editPerson('')
          }}
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
