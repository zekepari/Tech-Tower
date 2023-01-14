import 'react-bootstrap/dist/react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

import Home from './Home';

function App() {
  return (
    <Container>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home title="Tech Tower - Home" />}/>
      </Routes>
    </Container>
  );
}

export default App;
