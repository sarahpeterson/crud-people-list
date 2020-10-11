// button
export const buttonStyles =
  (backgroundColor, color, width, border, boxShadow) => {
    const buttonContainer = {
      width,
      height: 45,
      borderColor: 'transparent',
      backgroundColor,
      color,
      border,
      boxShadow,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50
    }
    const buttonText = {
      margin: 0,
      padding: 0
    }
  return { buttonContainer, buttonText }
}

// header
export const headerStyles = () => {
  const headerText = {
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 26,
    color: '#00234B',
    margin: 0,
    padding: 0
  }
  const subText = {
    marginTop: 10,
    padding: 0
  }
  return { headerText, subText }
}
