import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import { useState } from 'react';

export default function ResponsiveDateTimePickers({ onChange }) {

  const [selectedDateTime, setSelectedDateTime] = useState(null);

  const handleDateChange = (newDate) => {
    setSelectedDateTime(newDate);
    onChange(newDate); // Pass selected date and time to the parent
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'DateTimePicker',
          'MobileDateTimePicker',
          'DesktopDateTimePicker',
          'StaticDateTimePicker',
        ]}
      >

        <DemoItem label="Day & Time">

          <DateTimePicker
          label="Controlled picker"
          value={selectedDateTime}
          onChange={handleDateChange}
        />

        </DemoItem>

      </DemoContainer>

    </LocalizationProvider>

  );
}
