import { Banner } from './components/Banner';
import { Header } from './components/Header';
import { PageContent } from './components/PageContent';
import { CardsContainer } from './components/CardsContainer';

function App() {
  return (
    <div style={{backgroundColor: '#EFEFEF94'}}>
      <Header/>
      <Banner />
      <PageContent/>
      <CardsContainer/>
    </div>
    
  );
}

export default App;
