import { Box } from '@mui/material';
import {
  Banner, Header, PageContent, CardsContainer, Form, Footer,
} from '../../components';
import BannerPrincipal from '../../assets/banner_principal.webp';

export function Home() {
  return (
    <Box sx={{ backgroundColor: 'background.default' }}>
      <Header buttonTitle="Noticias" linkTo="noticias" />
      <Banner backgroundImage={BannerPrincipal} showButton title="ASESORAMIENTO ONLINE" subtitle="Conocé tus derechos" />
      <PageContent />
      <CardsContainer />
      <Form />
      <Footer />
    </Box>
  );
}
