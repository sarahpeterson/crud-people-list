import React from 'react';
import { buttonStyles } from './styles';

export default ({ backgroundColor, text, color, width, border, boxShadow, btnClick, disabled, dataTestId }) => {
  const { buttonContainer, buttonText } = buttonStyles(backgroundColor, color, width, border, boxShadow);
  return (
    <button
      data-testid={dataTestId}
      disabled={disabled}
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
