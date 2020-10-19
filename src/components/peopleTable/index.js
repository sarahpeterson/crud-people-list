import React, { useState } from 'react';
import Person from '../person';
import Button from '../common/Button';
import Header from '../common/Header';
import Account from '../account';
import PeopleCount from './PeopleCount';
import { colors } from '../common/colors';
import './styles.css';

const { white, purpleBorder, mainPurple } = colors;

export default ({ btnClick, edit, newPeople }) => {
  const [peopleList, updatePeople] = useState([]);
  if (newPeople.length !== 0 && peopleList.length === 0) updatePeople(newPeople);
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
        <div className="people-list">
          <Header
            headline="People"
          />
          <PeopleCount count={peopleList.length} />
        </div>
        <Button
          disabled={false}
          backgroundColor={mainPurple}
          text="Add Employee"
          boxShadow={purpleBorder}
          border="transparent"
          color={white}
          width={181}
          btnClick={() => btnClick()}
        />
      </div>
      <table>
        <thead>
          <tr>
            <td data-testid="heading">
              EMPLOYEE
            </td>
            <td>
              JOB TITLE
            </td>
            <td>
              COUNTRY
            </td>
            <td>
              SALARY
            </td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {listPeople}
        </tbody>
      </table>
    </div>
  )
}
