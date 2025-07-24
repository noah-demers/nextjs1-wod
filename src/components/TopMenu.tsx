'use client';

import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import { Cart } from 'react-bootstrap-icons';

const TopMenu = (): JSX.Element => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#">
        <Image src="/wod-ko-hana-logo.png" alt="Kō Hana Logo" width="200" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href="#"><u>OUR JOURNEY</u></Nav.Link>
          <Nav.Link href="#">SHOP</Nav.Link>
          <Nav.Link href="#">CORPORATE GIFTING</Nav.Link>
          <Nav.Link href="#">VISIT</Nav.Link>
          <Nav.Link href="#">&apos;OHANA RUM CLUB</Nav.Link>
          <Nav.Link href="#">WHERE TO BUY</Nav.Link>
          <Nav.Link href="#">RECIPES</Nav.Link>
          <Nav.Link href="#"><Cart /> 0</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default TopMenu;
