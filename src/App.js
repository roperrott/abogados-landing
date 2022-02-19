import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Home } from './pages/home';
import { News } from './pages/news';
import { NotFound } from './pages/notFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="noticias" element={<News />} />
        <Route exact path="/*" element={<NotFound />} />
      </Routes>
    </Router>

  );
}

export default App;
