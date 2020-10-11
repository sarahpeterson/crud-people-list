import React from 'react';
import { buttonStyles } from './styles';

export default ({ backgroundColor, text, color, width, border, boxShadow, btnClick }) => {
  const { buttonContainer, buttonText } = buttonStyles(backgroundColor, color, width, border, boxShadow);
  return (
    <button
      style={buttonContainer}
      onClick={() => btnClick()}
    >
      <p
        style={buttonText}
      >
        {text}
      </p>
    </button>
  )
}
