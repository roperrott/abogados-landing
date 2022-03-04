import { Box } from '@mui/material';
import {
  Header, Footer,
} from '../../components';
import { NotFoundContent } from './components/NotFoundContent';

export function NotFound() {
  return (
    <Box sx={{ backgroundColor: 'background.default' }}>
      <Header linkTo="/" buttonTitle="INICIO" />
      <NotFoundContent />
      <Footer />
    </Box>
  );
}
