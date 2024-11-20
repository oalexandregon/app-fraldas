import React from 'react';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';


const DatePickerComponent:React.FC = ({ ...props }) => {
    return (
        
        
        <DatePicker {...props} />
        
    );
};

export default DatePickerComponent;