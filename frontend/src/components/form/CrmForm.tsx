import { useForm, FormProvider } from 'react-hook-form';

import { Box, SxProps } from '@mui/material';

interface Props {
  children: React.ReactNode;
  onSubmit: (data: object) => void;
  customCss?: SxProps;
}

export default function CrmForm({ children, onSubmit, customCss }: Props) {
  const createUserForm = useForm();

  const { handleSubmit } = createUserForm;

  return (
    <FormProvider {...createUserForm}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={customCss}>
        {children}
      </Box>
    </FormProvider>
  );
}
