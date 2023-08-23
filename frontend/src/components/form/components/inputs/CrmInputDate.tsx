'use client';

import { Controller, useFormContext } from 'react-hook-form';

import { SxProps } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

interface Props {
  name: string;
  label: string;
  defaultValue?: string;
  rules?: object;
  customCss?: SxProps;
}

export default function CrmInputDate({
  name,
  label,
  defaultValue,
  rules,
  customCss
}: Props) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      defaultValue={defaultValue ? defaultValue : null}
      control={control}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']} sx={customCss}>
            <DatePicker
              label={label}
              format="DD/MM/YYYY"
              onChange={onChange}
              value={value}
              sx={{ width: { xs: '100%', sm: 'auto' } }}
              slotProps={{
                textField: {
                  helperText: error && error?.message,
                  error: error && true
                }
              }}
            />
          </DemoContainer>
        </LocalizationProvider>
      )}
    />
  );
}
