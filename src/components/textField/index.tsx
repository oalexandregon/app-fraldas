import React from 'react';
import { TextField } from '@mui/material';

interface ITextFieldProps {
  props?: any;
}

const TextFieldComponent: React.FC<ITextFieldProps> = ({ props }) => {
  return (
    <TextField {...props}/>
  );
};

export default TextFieldComponent;