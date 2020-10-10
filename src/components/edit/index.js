import React, { useState } from 'react';
import Person from '../person';
import Button from '../common/Button';
import Header from '../common/Header';
import Account from '../account';
import PeopleCount from '../person/peopleCount';

export default ({ btnClick, edit }) => {
  const [newPerson, updatePeople] = useState()
  const addEdit = edit ? 'Edit' : 'Add';
  const fillEdit = edit ? 'Edit' : 'Fill out';
  const newEmp = edit ? ' ' : 'new ';
  const addSave = edit ? 'Save' : 'Add Employee';
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <div
        style={{
          // display: 'flex',
          width: '100%'
        }}
      >
        <Account
          account={{ name: 'Julie Howard', type: 'Admin' }}
        />
      </div>
      <div
        style={{
          flexDirection: 'column',
          display: 'flex',
          position: 'absolute',
          width: 1078,
          height: 760,
          // left: 101,
          top: 120,
          borderRadius: 10,
          backgroundColor: '#fff',
          boxShadow: '6px 6px 54px rgba(0, 0, 0, 0.05)'
        }}
      >
        <Header
          headline={`${addEdit} a new employee`}
          subHeadline={`${fillEdit} the information of your ${newEmp}employee.`}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            marginTop: 20,
          }}
        >
          <div style={{ flexDirection: 'column', alignItems: 'flex-start', display: 'flex' }}>
            <label
              style={{
                fontSize: 13,
                display: 'block',
              }}
            >
              Name
            </label>
            <input
              style={{
                borderBottom: '1.5px solid #624DE3',
                borderTop: 0,
                borderRight: 0,
                borderLeft: 0,
                width: 599,
                height: 30,
                fontSize: 20
              }}
              placeholder="e.g. Jane Doe"
            />
            <p
              style={{
                fontSize: 13
              }}
            >
              First and last names
            </p>
            <label
              style={{
                fontSize: 13
              }}
            >
              Birthdate
            </label>
            <input
              style={{
                borderBottom: '1.5px solid #624DE3',
                borderTop: 0,
                borderRight: 0,
                borderLeft: 0,
                width: 599,
                height: 30,
                fontSize: 20
              }}
              placeholder="e.g. 17/02/1990"
            />
            <p
              style={{
                fontSize: 13
              }}
            >
              DD/MM/YYYY
            </p>
            <label
              style={{
                fontSize: 13
              }}
            >
              Job Title
            </label>
            <input
              style={{
                borderBottom: '1.5px solid #624DE3',
                borderTop: 0,
                borderRight: 0,
                borderLeft: 0,
                width: 599,
                height: 30,
                fontSize: 20
              }}
              placeholder="e.g. Product manager"
            />
            <p
              style={{
                fontSize: 13
              }}
            >
              What is their role?
            </p>
            <label
              style={{
                fontSize: 13
              }}
            >
              Country
            </label>
            <input
              style={{
                borderBottom: '1.5px solid #624DE3',
                borderTop: 0,
                borderRight: 0,
                borderLeft: 0,
                width: 599,
                height: 30,
                fontSize: 20
              }}
              placeholder="Portugal"
            />
            <p
              style={{
                fontSize: 13
              }}
            >
              Where are they based?
            </p>
            <label
              style={{
                fontSize: 13
              }}
            >
              Salary
            </label>
            <input
              style={{
                borderBottom: '1.5px solid #624DE3',
                borderTop: 0,
                borderRight: 0,
                borderLeft: 0,
                width: 599,
                height: 30,
                fontSize: 20
              }}
              placeholder="e.g. 50000"
            />
            <p
              style={{
                fontSize: 13
              }}
            >
              Gross yearly salary
            </p>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 40,
            alignItems: 'center',
            backgroundColor: '#F9FAFF',
            width: 1078,
            height: 104,
          }}
        >
          <Button
            text="Cancel"
            backgroundColor="#fff"
            border="2px solid rgba(98, 77, 227, 0.3)"
            width={154}
          />
          <Button
            backgroundColor="#624DE3"
            text={addSave}
            boxShadow="0px 6px 12px rgba(98, 77, 227, 0.3)"
            border="transparent"
            color="#fff"
            width={154}
            btnClick={() => btnClick()}
          />
        </div>
      </div>
    </div>
  )
}
