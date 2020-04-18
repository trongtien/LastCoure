import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './style.scss';
HomeComponent.propTypes = {};

function HomeComponent(props) {
  return (
    <div className="product">
      <Col className="product-title">
        <p>San Pham Hot</p>
      </Col>
      <Row className="product">
        <Col md={3}>
          <Card style={{ width: '16rem' }}>
            <Button className="icon-card">Icon</Button>
            <Card.Img variant="top" src="https://mrhoa.com/wp-content/uploads/2019/01/anh-hoa-dep-nhat-the-gioi.jpg" />
            <Card.Body>
              <Card.Title>Trai cay moi</Card.Title>
              <Card.Text>213213131</Card.Text>
            </Card.Body>
            <Card.Body className="btn-card">
              <Button variant="primary" className="btn-card-1">
                Chi tiet
              </Button>
              <Button variant="primary" className="btn-card-2">
                Mua ngay
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card style={{ width: '16rem' }}>
            <Button className="icon-card">Icon</Button>
            <Card.Img variant="top" src="https://mrhoa.com/wp-content/uploads/2019/01/anh-hoa-dep-nhat-the-gioi.jpg" />
            <Card.Body>
              <Card.Title>Trai cay moi</Card.Title>
              <Card.Text>213213131</Card.Text>
            </Card.Body>
            <Card.Body className="btn-card">
              <Button variant="primary" className="btn-card-1">
                Chi tiet
              </Button>
              <Button variant="primary" className="btn-card-2">
                Mua ngay
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card style={{ width: '16rem' }}>
            <Button className="icon-card">Icon</Button>
            <Card.Img variant="top" src="https://mrhoa.com/wp-content/uploads/2019/01/anh-hoa-dep-nhat-the-gioi.jpg" />
            <Card.Body>
              <Card.Title>Trai cay moi</Card.Title>
              <Card.Text>213213131</Card.Text>
            </Card.Body>
            <Card.Body className="btn-card">
              <Button variant="primary" className="btn-card-1">
                Chi tiet
              </Button>
              <Button variant="primary" className="btn-card-2">
                Mua ngay
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card style={{ width: '16rem' }}>
            <Button className="icon-card">Icon</Button>
            <Card.Img variant="top" src="https://mrhoa.com/wp-content/uploads/2019/01/anh-hoa-dep-nhat-the-gioi.jpg" />
            <Card.Body>
              <Card.Title>Trai cay moi</Card.Title>
              <Card.Text>213213131</Card.Text>
            </Card.Body>
            <Card.Body className="btn-card">
              <Button variant="primary" className="btn-card-1">
                Chi tiet
              </Button>
              <Button variant="primary" className="btn-card-2">
                Mua ngay
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default HomeComponent;
