import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PeopleTable from './components/peopleTable';

function App() {
  const [people, showPeople] = useState(true);
  const [add, addPerson] = useState(false);
  const [edit, editPerson] = useState(false);
  return (
    <div style={{ backgroundColor: '#F4F7FC' }}>
      <PeopleTable />
    </div>
  );
}

export default App;
