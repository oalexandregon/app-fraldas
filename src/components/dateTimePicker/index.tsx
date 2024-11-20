import React from 'react';
import { DateTimePicker } from '@mui/x-date-pickers';


const DateTimePickerComponent: React.FC = ({ ...props }) => {
    return (
        <DateTimePicker {...props} />
    );
};

export default DateTimePickerComponent;