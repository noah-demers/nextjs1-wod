'use client';

import { Container, Row, Image } from 'react-bootstrap';

const CenterImage = (): JSX.Element => (
  <Container fluid className="centerImage align-items-center position-relative">
    <Row className="align-items-center">
      <h1 className="text-center">OUR JOURNEY</h1>
    </Row>
    <div className="book-now-container">
      <Image src="/booknowbutton.png" alt="Book Now" className="book-now-button" />
    </div>
  </Container>
);

export default CenterImage;
