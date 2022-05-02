import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { FixedButton } from './components/FixedButton';
import ScrollToTop from './components/ScrollToTop';
import { Home } from './pages/home';
import { News } from './pages/news';
import { NotFound } from './pages/notFound';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="noticias" element={<News />} />
          <Route exact path="/*" element={<NotFound />} />
        </Routes>
      </Router>
      <FixedButton />
    </>

  );
}

export default App;
