'use client';

import { Container, Row, Col, Nav, Image } from 'react-bootstrap';
import { Facebook, Instagram, Twitter, Yelp } from 'react-bootstrap-icons';

const BottomMenu = (): JSX.Element => (
  <div className="bg-dark footer mt-auto">
    <Container>
      <Row className="py-3">
        <Col xs={6}>
          <Image src="/wod-ko-hana-logo.png" alt="Kō Hana Logo" width="200" />
          <Row>
            <Nav>
              <Nav.Link href="#">ALOHA@KOHANARUM.COM</Nav.Link>
              <Nav.Link href="#">(808) 649-0830</Nav.Link>
              <Nav.Link href="#">
                92-1770 Kunia Rd., #227, Kunia, HI 96759, USA
              </Nav.Link>
            </Nav>
          </Row>
        </Col>
        <Col xs={2}></Col>
        <Col className="rightCol justify-content-end">
          <Row>
            <Nav className="justify-content-end">
              <Nav.Link href="#"><Instagram size={30} /></Nav.Link>
              <Nav.Link href="#"><Facebook size={30} /></Nav.Link>
              <Nav.Link href="#"><Twitter size={30} /></Nav.Link>
              <Nav.Link href="#"><Yelp size={30} /></Nav.Link>
            </Nav>
          </Row>
          <Row>
            <Nav className="justify-content-end">
              <Nav.Link href="#">TERMS & CONDITIONS</Nav.Link>
              <Nav.Link href="#">PRIVACY POLICY</Nav.Link>
            </Nav>
          </Row>
        </Col>
      </Row>
    </Container>
  </div>
);

export default BottomMenu;
