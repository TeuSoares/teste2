import { SxProps } from '@mui/material';
import Button, { ButtonPropsColorOverrides } from '@mui/material/Button';
import { OverridableStringUnion } from '@mui/types';

interface Props {
  text: string | JSX.Element;
  type?: 'button' | 'submit';
  startIcon?: JSX.Element | undefined;
  color?:
    | OverridableStringUnion<
        | 'inherit'
        | 'primary'
        | 'secondary'
        | 'success'
        | 'error'
        | 'info'
        | 'warning',
        ButtonPropsColorOverrides
      >
    | undefined;
  customCss?: SxProps;
}

export default function CrmButton({
  text,
  type,
  startIcon,
  color,
  customCss
}: Props) {
  return (
    <Button
      variant="contained"
      type={type || 'button'}
      startIcon={startIcon}
      color={color}
      sx={{
        padding: '16.5px 14px',
        width: { xs: '100%', sm: 'auto' },
        ...customCss
      }}
    >
      {text}
    </Button>
  );
}
