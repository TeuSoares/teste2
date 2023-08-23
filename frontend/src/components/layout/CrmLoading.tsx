import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export default function CrmLoading() {
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <CircularProgress size={100} />
    </Box>
  );
}
