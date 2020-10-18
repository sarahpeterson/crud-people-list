import React from 'react';
import { headerStyles } from './styles';

export default ({ headline, subHeadline }) => {
  const border = { borderBottom: '1px solid #EAEDF3' }
  const styles = { padding: 30, textAlign: 'left' };
  const newStyle = subHeadline ? Object.assign(styles, border) : null;
  return (
    <div style={newStyle}>
      <p style={headerStyles().headerText}>
        {headline}
      </p>
      {subHeadline ? <p style={headerStyles().subText}>
        {subHeadline}
      </p> : null}
    </div>
  )
}
