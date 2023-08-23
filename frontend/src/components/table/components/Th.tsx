import TableCell from '@mui/material/TableCell';

interface Props {
  children: React.ReactNode;
}

export default function Th({ children }: Props) {
  return (
    <TableCell
      component="th"
      align="center"
      sx={{ fontSize: '.9em', fontWeight: 'bold', color: 'white.main' }}
    >
      {children}
    </TableCell>
  );
}
