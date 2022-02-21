import { Box } from '@mui/material';
import {
  Banner, Header, Footer,
} from '../../components';
import BannerNews from '../../assets/banner_news.jpeg';
import { NewsCardContainer } from '../../components/NewsCardContainer';

export function News() {
  return (
    <Box sx={{ backgroundColor: 'background.default' }}>
      <Header buttonTitle="Inicio" linkTo="/" />
      <Banner backgroundImage={BannerNews} title="NOVEDADES" subtitle="Blog de noticias" />
      <NewsCardContainer />
      <Footer />
    </Box>
  );
}
