import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Img from './assets/react.svg'

function BrandExample() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={Img}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            IMS
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;