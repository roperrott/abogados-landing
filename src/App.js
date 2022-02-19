import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Home } from './pages/home';
import { News } from './pages/news';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="noticias" element={<News />} />
      </Routes>
    </Router>

  );
}

export default App;
