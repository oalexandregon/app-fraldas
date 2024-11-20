import React from 'react';
import { Button, ButtonProps } from '@mui/material';

interface IButtonProps extends ButtonProps {
  props?: any;
  children: React.ReactNode;
}

const ButtonComponent: React.FC<IButtonProps> = ({ children, ...props }) => {
  return (
    <Button {...props}>{children}</Button>
  );
};

export default ButtonComponent;