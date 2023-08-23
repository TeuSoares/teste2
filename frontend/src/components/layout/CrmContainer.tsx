import Box from '@mui/material/Box';

interface Props {
  children: React.ReactNode;
}

export default function CrmContainer({ children }: Props) {
  return (
    <Box
      maxWidth="xl"
      ml="auto"
      mr="auto"
      sx={{ padding: { xs: '0 .9em', xl: '0' } }}
    >
      {children}
    </Box>
  );
}
