import { colors } from './colors';
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
      padding: 0,
      fontSize: 16,
      fontWeght: 500
    }
  return { buttonContainer, buttonText }
}

// header
export const headerStyles = () => {
  const headerText = {
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 26,
    color: colors.blue,
    margin: 0,
    padding: 0
  }
  const subText = {
    marginTop: 10,
    padding: 0,
    color: colors.lightBlue,
  }
  return { headerText, subText }
}
