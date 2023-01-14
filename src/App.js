import 'react-bootstrap/dist/react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Carousel } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

import Home from './Home';

function App() {
  return (
    <>
      <Container>
        <Navigation />
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              alt=""
              src=""
              height="400px"
              className="d-block w-100"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              alt=""
              src=""
              height="400px"
              className="d-block w-100"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      <Routes>
        <Route path="/" element={<Home title="Tech Tower - Home" />} />
      </Routes>
    </>
  );
}

export default App;
