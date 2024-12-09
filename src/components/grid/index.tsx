import React from 'react';
import { Grid2, Grid2Props } from '@mui/material';

interface IGridProps extends Grid2Props {
  props?: any;
  children?: React.ReactNode;
}

const GridComponent: React.FC<IGridProps> = ({ children, ...props }) => {
  return (
    <Grid2 {...props}>{children}</Grid2>
  );
};

export default GridComponent;