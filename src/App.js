import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Banner } from './components';
import { Home } from './pages/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="noticias" element={<Banner />} />
      </Routes>
    </Router>

  );
}

export default App;
