import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { MdRoom, MdPermPhoneMsg } from 'react-icons/md';
import './header.scss';
Header.propTypes = {};

function Header(props) {
  return (
    <div>
      <Row>
        <Col className="header-title">
          <p>
            <MdPermPhoneMsg />
            Hotline
          </p>
          <p>
            <MdRoom />
            Địa Chỉ: 1105 duong 3 thang 2 Quan 11
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
