import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            Copyright © Devinda Dilshan 2025
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;