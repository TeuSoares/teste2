import CrmContainer from '../layout/CrmContainer';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function CrmFooter() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        padding: '1.5em 0'
      }}
    >
      <CrmContainer>
        <Typography
          variant="h6"
          color="white.main"
          textAlign={{ xs: 'center', sm: 'right' }}
        >
          Desenvolvido por{' '}
          <Link
            target="_blank"
            href="https://www.crmsolucoes.com.br/"
            color="contrast.main"
            underline="hover"
          >
            CRM Soluções
          </Link>
        </Typography>
      </CrmContainer>
    </Box>
  );
}
