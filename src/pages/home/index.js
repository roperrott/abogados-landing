import { Box } from '@mui/material';
import {
  Banner, Header, PageContent, CardsContainer, Form, Footer,
} from '../../components';

export function Home() {
  return (
    <Box sx={{ backgroundColor: 'background.default' }}>
      <Header />
      <Banner />
      <PageContent />
      <CardsContainer />
      <Form />
      <Footer />
    </Box>
  );
}
