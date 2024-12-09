import React from 'react';
import { Fab, FabProps } from '@mui/material';

interface IFabProps extends FabProps {
  props?: any;
  children?: React.ReactNode;
}

const FabComponent: React.FC<IFabProps> = ({ children, ...props }) => {
  return (
    <Fab {...props}>{children}</Fab>
  );
};

export default FabComponent;