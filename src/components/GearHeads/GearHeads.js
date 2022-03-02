import { Divider, Heading } from "@chakra-ui/react";
import React from "react";
import "./GearHeads.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import guitarbg from "../../assets/images/guitarbg.png";
import guitarboy from "../../assets/images/guitarboy.png";
import musicman from "../../assets/images/musicman.png";
import guitarbg1 from "../../assets/images/guitarbg1.png";
import table from "../../assets/images/table.png";

const Gearheads = () => {
  return (
    <div>
      <Divider
        m="0 auto"
        width={["58px", "110px", "80px", "58px"]}
        color="#AB0433"
      />
      <Heading color="#505050" textAlign="center" mt="3rem" mb="2rem">
        Gear Head
      </Heading>
      <div className="center">
        <Container>
          <Row>
            <Col>
              <Card style={{ width: "25rem" }}>
                <Card.Img variant="top" src={guitarbg} />
                <Card.Body>
                  <Card.Title>Article Title</Card.Title>
                  <Card.Text>Article Subhead</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "25rem" }}>
                <Card.Img variant="top" src={guitarboy} />
                <Card.Body>
                  <Card.Title>Article Title</Card.Title>
                  <Card.Text>Article Subhead</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={musicman} />
                <Card.Body>
                  <Card.Title>Article Title</Card.Title>
                  <Card.Text>Article Subhead</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={guitarbg1} />
                <Card.Body>
                  <Card.Title>Article Title</Card.Title>
                  <Card.Text>Article Subhead</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={table} />
                <Card.Body>
                  <Card.Title>Article Title</Card.Title>
                  <Card.Text>Article Subhead</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Gearheads;
