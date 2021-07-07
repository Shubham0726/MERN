import React from 'react';
import Button from '@material-ui/core/Button';

const Buttons = (props) => {
    const { variant, disabled, children, color } = props;
  return (
    <div>
      <Button variant={variant} disabled={disabled} color={color}>{children}</Button>
    </div>
  );
}

export default Buttons;
