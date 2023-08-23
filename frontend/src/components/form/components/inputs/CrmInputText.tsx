import { Controller, useFormContext } from 'react-hook-form';

import { SxProps } from '@mui/material';
import TextField from '@mui/material/TextField';

interface Props {
  name: string;
  label: string;
  defaultValue?: string;
  rules?: object;
  customCss?: SxProps;
}

export default function CrmInputText({
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
      control={control}
      rules={rules}
      defaultValue={defaultValue ? defaultValue : ''}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          size="medium"
          error={!!error}
          onChange={onChange}
          value={value}
          label={label}
          variant="outlined"
          sx={customCss}
          helperText={error && error?.message}
        />
      )}
    />
  );
}
