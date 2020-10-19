import React, { useState } from 'react';
import Button from '../common/Button';
import Header from '../common/Header';
import Account from '../account';
import Input from './Input';
import { colors } from '../common/colors';
import './styles.css';

const { mainPurple, white, purpleBorder } = colors;

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
    newPerson["id"] = current.length > 0 ? current[current.length - 1].id + 1 : 0;
    current.push(newPerson)
  } return null;
}

const validate = (newPerson, current, editMode, editing, btnClick) => {
  if (Object.keys(newPerson).length === 0) alert("Please add information about the person")
  if (newPerson.name === "" || newPerson.name === undefined) alert("Please add the person's name")
  if (newPerson.birthday === "" || newPerson.birthday === undefined) alert("Please add the person's birthday")
  if (newPerson.country === "" || newPerson.country === undefined) alert("Please add the person's country")
  if (newPerson.title === "" || newPerson.title === undefined) alert("Please add the person's title")
  if (newPerson.salary === "" || newPerson.salary === undefined) alert("Please add the person's salary")
  if (Object.keys(newPerson).length >= 5) {
    updateCurrent(newPerson, current, editMode, editing)
    btnClick(current)
  }
}

export default ({ btnClick, current, editing, cancel }) => {
  const editMode = editing !== '';
  const decideText = editText(editMode);
  const checkEdit = editMode ? current.filter(c => c.id === editing) : null;
  const [newPerson, updatePeople] = useState(editMode ? checkEdit[0] : {});
  const [name, updateName] = useState(editMode ? checkEdit[0].name : '');
  const [bday, updateBday] = useState(editMode ? checkEdit[0].birthday : '');
  const [title, updateTitle] = useState(editMode ? checkEdit[0].title : '');
  const [country, updateCountry] = useState(editMode ? checkEdit[0].country : '');
  const [salary, updateSalary] = useState(editMode ? checkEdit[0].salary : '');
  const [disabled, updateBtn] = useState(editMode ? Object.keys(checkEdit[0]).length < 5 : Object.keys(newPerson).length >= 5);
  return (
    <div>
      <Account
        account={{ name: 'Julie Howard', type: 'Admin' }}
      />
      <div className="edit-container">
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
                  console.log('e', e)
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
            <div className="input-btn">
              <Button
                text="Cancel"
                disabled={false}
                backgroundColor={white}
                border={purpleBorder}
                width={154}
                color={mainPurple}
                btnClick={() => cancel()}
              />
            </div>
            <div className="input-btn">
              <Button
                dataTestId="edit-save"
                disabled={disabled}
                backgroundColor={mainPurple}
                text={decideText.addSave}
                boxShadow={purpleBorder}
                border="transparent"
                color={white}
                width={154}
                btnClick={() => validate(newPerson, current, editMode, editing, btnClick)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
