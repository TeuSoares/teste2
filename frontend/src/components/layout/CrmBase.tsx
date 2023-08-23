import Box from '@mui/material/Box';

interface Props {
  children: React.ReactNode;
}

export default function CrmBase({ children }: Props) {
  return (
    <Box p={2} boxShadow={2} bgcolor="white.main" borderRadius="5px">
      {children}
    </Box>
  );
}
