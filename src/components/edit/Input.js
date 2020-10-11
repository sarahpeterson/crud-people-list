import React from 'react';
import './styles.css';

export default ({ labelTxt, inputValue, btnClick, inputTxt, placeholder }) => {
  return (
    <div className="input-container">
      <label className="input-label">
        {labelTxt}
      </label>
      <input
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
