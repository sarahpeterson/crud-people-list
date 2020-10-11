import React, { useState } from 'react';
import Button from '../common/Button';
import Header from '../common/Header';
import Account from '../account';
import Input from './Input';
import './styles.css';

const editText = (editMode) => {
  const addEdit = editMode ? 'Edit' : 'Add';
  const fillEdit = editMode ? 'Edit' : 'Fill out';
  const newEmp = editMode ? ' ' : 'new ';
  const addSave = editMode ? 'Save' : 'Add Employee';
  return { addEdit, fillEdit, newEmp, addSave }
}

const updateCurrent = (newPerson, current, editMode, editing) => {
  if (editMode) current.splice(editing, 1, newPerson)
  if (!editMode) {
    newPerson["id"] = current[current.length - 1].id + 1;
    current.push(newPerson)
  } return null;
}

export default ({ btnClick, current, editing }) => {
  const editMode = editing !== '';
  const decideText = editText(editMode);
  const checkEdit = editMode ? current.filter(c => c.id === editing) : null;
  const [newPerson, updatePeople] = useState(editMode ? checkEdit[0] : {});
  const [name, updateName] = useState(editMode ? checkEdit[0].name : '');
  const [bday, updateBday] = useState(editMode ? checkEdit[0].birthday : '');
  const [title, updateTitle] = useState(editMode ? checkEdit[0].title : '');
  const [country, updateCountry] = useState(editMode ? checkEdit[0].country : '');
  const [salary, updateSalary] = useState(editMode ? checkEdit[0].salary : '');
  return (
    <div className="edit-container">
      <div>
        <Account
          account={{ name: 'Julie Howard', type: 'Admin' }}
        />
      </div>
      <div className="edit-main">
        <Header
          headline={`${decideText.addEdit} a new employee`}
          subHeadline={`${decideText.fillEdit} the information of your ${decideText.newEmp}employee.`}
        />
        <div className="input-section">
          <div className="input-column">
            <Input
              labelTxt="Name"
              placeholder="e.g. Jane Doe"
              inputValue={name}
              btnClick={(e) => {
                updateName(e.target.value);
                updatePeople({...newPerson, name: e.target.value })
              }}
              inputTxt="First and last names"
            />
            <Input
              labelTxt="Birthdate"
              placeholder="e.g. 17/02/1990"
              inputValue={bday}
              btnClick={(e) => {
                updateBday(e.target.value);
                updatePeople({...newPerson, birthday: e.target.value })
              }}
              inputTxt="DD/MM/YYYY"
            />
            <Input
              labelTxt="Job Title"
              placeholder="e.g. Product manager"
              inputValue={title}
              btnClick={(e) => {
                updateTitle(e.target.value);
                updatePeople({...newPerson, title: e.target.value })
              }}
              inputTxt="What is their role?"
            />
            <Input
              labelTxt="Country"
              placeholder="Portugal"
              inputValue={country}
              btnClick={(e) => {
                updateCountry(e.target.value);
                updatePeople({...newPerson, country: e.target.value })
              }}
              inputTxt="Where are they based?"
            />
            <Input
              labelTxt="Salary"
              placeholder="e.g. 50000"
              inputValue={salary}
              btnClick={(e) => {
                updateSalary(e.target.value);
                updatePeople({...newPerson, salary: e.target.value });
              }}
              inputTxt="Gross yearly salary"
            />
          </div>
        </div>
        <div className="input-btn-contain">
          <Button
            text="Cancel"
            backgroundColor="#fff"
            border="2px solid rgba(98, 77, 227, 0.3)"
            width={154}
          />
          <Button
            backgroundColor="#624DE3"
            text={decideText.addSave}
            boxShadow="0px 6px 12px rgba(98, 77, 227, 0.3)"
            border="transparent"
            color="#fff"
            width={154}
            btnClick={() => {
              updateCurrent(newPerson, current, editMode, editing)
              btnClick(current)
            }}
          />
        </div>
      </div>
    </div>
  )
}
