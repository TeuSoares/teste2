import TableCell from '@mui/material/TableCell';

interface Props {
  children: React.ReactNode;
}

export default function Td({ children }: Props) {
  return (
    <TableCell
      component="td"
      color="#000"
      align="center"
      sx={{ fontSize: '.9em' }}
    >
      {children}
    </TableCell>
  );
}
