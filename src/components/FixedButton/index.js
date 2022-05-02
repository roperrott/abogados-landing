import { Fab, useMediaQuery, useTheme } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export function FixedButton() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Fab
      color="secondary"
      variant={matches ? 'extended' : 'circular'}
      href="https://wa.me/5492494025191"
      target="_blank"
      size="large"
      rel="noopener noreferrer"
      sx={{
        position: 'fixed',
        zIndex: 999,
        right: 30,
        bottom: 40,
      }}
    >
      <WhatsAppIcon style={{ fontSize: 32, marginRight: matches ? 10 : 0 }} />
      {matches && 'CONSULTÁ GRATIS'}
    </Fab>
  );
}
