import { Banner } from './components/Banner';
import { Header } from './components/Header';
import { PageContent } from './components/PageContent';
import { CardsContainer } from './components/CardsContainer';
import { Form } from './components/Form';
import { Footer } from './components/Footer';

function App() {
  return (
    <div style={{ backgroundColor: '#EFEFEF94' }}>
      <Header />
      <Banner />
      <PageContent />
      <CardsContainer />
      <Form />
      <Footer />
    </div>

  );
}

export default App;
