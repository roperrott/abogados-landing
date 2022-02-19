import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Banner } from './components';
import { Home } from './pages/home';
import { NotFound } from './pages/notFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="noticias" element={<Banner />} />
        <Route exact path="/*" element={<NotFound />} />
      </Routes>
    </Router>

  );
}

export default App;
