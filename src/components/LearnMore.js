import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function LearnMore() {
  return (
    <Container>
      <Row className="my-5">
        <Col md={6}>
            <h6>Founders</h6>
          <img
            src="https://theorg.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchristian.94257c3d.png&w=2048&q=75"
            alt="Our Team"
            className="img-fluid"
          />
          {"\t"} {"\t"} {"\t"}
         
          <img
            src="https://theorg.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fandreas.09069544.png&w=2048&q=75"
            alt="Our Team"
            className="img-fluid"
          />
        </Col>
        <Col md={6}>
          <h1>About Us</h1>
          <p>
            Who are your company’s unsung heroes? The superstars? The ones who
            get things done? Businesses aren’t made of bricks and clicks,
            businesses are made of people, and the best businesses find a way to
            show that their people are appreciated, celebrated, and honored in
            the workplace. We believe a company’s greatest asset is its people.
            This includes the folks that are never highlighted on the company
            website, never lauded in the press, and never showcased to the
            outside world on professional networking sites. We believe that if
            we can shine a light on these people, everyone will benefit. We’re
            making organizations more transparent, and as a result, we’ll
            understand more about our own companies, the people in them, and
            finally sing the songs of the true heroes.
          </p>
          <Button variant="primary" href="https://finkraft.ai/">
            Contact Us
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="mb-3" style={{ maxWidth: "540px" }}>
            <Row className="g-0">
              <Col md={4}>
                <Card.Img
                  src="https://cdn.theorg.com/86197ce7-9060-4c9e-b272-9ea9cb381f40_thumb.jpg"
                  alt="Employee Photo"
                />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>Rohit Anand</Card.Title>
                  <Card.Text>CEO</Card.Text>
                  <Button
                    variant="outline-primary"
                    href="https://theorg.com/org/finkraft/org-chart/rohit-anand"
                  >
                    More About Rohit
                  </Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
