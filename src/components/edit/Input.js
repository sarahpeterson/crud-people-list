import React from 'react';
import CountryList from './CountryList';
import './styles.css';

export default ({ labelTxt, inputValue, btnClick, inputTxt, placeholder }) => {
  if (labelTxt === 'Country') {
    return (
      <CountryList
        value={inputValue}
        btnClick={(e) => btnClick(e)}
      />
    )
  }
  return (
    <div className="input-container">
      <label className="input-label">
        {labelTxt}
      </label>
      <input
        data-testid="people-input"
        className="input-border"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => btnClick(e)}
      />
      <p className="input-text">
        {inputTxt}
      </p>
    </div>
  )
}
