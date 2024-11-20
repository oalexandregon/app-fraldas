import React from 'react';
import { Card, CardProps } from '@mui/material';

interface ICardProps extends CardProps {
  props?: any;
  children: React.ReactNode;
}

const CardComponent: React.FC<ICardProps> = ({ children, ...props }) => {
  return (
    <Card {...props} sx={{ minWidth: 275, width: '100px', height: '100px' }}>{children}</Card>
  );
};

export default CardComponent;