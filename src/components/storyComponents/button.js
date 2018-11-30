// button.js
// @flow
import React from 'react';
 
const paddingStyles = {
  small: '4px 8px',
  medium: '8px 16px',
};
 
const Button = ({
  size,
  ...rest
}: {
  /** The size of the button */
  size: 'small' | 'medium',
}) => {
  const style = {
    padding: paddingStyles[size] || '',
  };
  return <button style={style} {...rest} />;
};
Button.defaultProps = {
  size: 'medium',
};
 
export default Button;