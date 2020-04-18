import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import './style.scss';

Footer.propTypes = {};

function Footer(props) {
  return (
    <div className="footer">
      <Row>
        <Col xl={3} lg={3} md={3} sm={12} xs={12}>
          <h1 className="text-title">THÔNG TIN LIÊN HỆ</h1>
          <p className="text">Siêu thị thực phẩm nhập khẩu chất lượng an toàn, giá tốt phù hợp cho mọi gia đình.</p>
          <ul className="text decoration">
            <li>- 1105 đường 3 tháng 2 quận 11</li>
            <li>- 1800000 </li>
            <li>Chủ Nhật 8h30-18h</li>
          </ul>
        </Col>
        <Col xl={3} lg={3} md={3} sm={12} xs={12}>
          <h1 className="text-title">ĐIỀU KHOẢN SỬ DỤNG</h1>
          <ul className="text decoration">
            <li> Điều khoản dịch vụ</li>
            <li> Chính sách bảo mật</li>
            <li> Chính sách mua hàng và vận chuyển</li>
            <li> Chính sách đổi trả</li>
          </ul>
        </Col>
        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
          <h1 className="text-title">LIÊN HỆ TRÁI CÂY 4 MÙA</h1>
          <div
            className="fb-page"
            data-href="https://www.facebook.com/SRMT.BichChi"
            data-width="500"
            data-hide-cover="false"
            data-show-facepile="true"
            data-adapt-container-width="true"
          ></div>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
