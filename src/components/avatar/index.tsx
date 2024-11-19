import React from 'react';
import { Avatar, AvatarProps } from '@mui/material'


interface IAvatarProps extends AvatarProps {
    props?: any;
    children?: any;
    backgroundColor?: string;
}

const AvatarComponent: React.FC<IAvatarProps> = ({ props, children, backgroundColor }) => {
    return <Avatar
        {...props}
        sx={{ bgcolor: backgroundColor || 'default' }}
    >{children}</Avatar>;
};

export default AvatarComponent;
