import React from 'react'

const Footer = () => {
  return (
    <div style={{ width: '100%' }}>
      <div className="row" style={{ height: "100px", background: '#86ba09', height: 'auto', padding: '20px 10px 20px 10px' }}>
        <div className="col-sm-4" style={{ color: '#FFFFFF' }} >
          <div style={{ marginLeft: '30px' }}>
            <h1 style={{ fontSize: '26px' }}>THÔNG TIN LIÊN HỆ</h1>
            <p>Siêu thị thực phẩm nhập khẩu chất lượng an toàn, giá tốt phù hợp cho một gia đình</p>
            <ul>
              <li>1105 đường 3 tháng 2 quận 11</li>
              <li>18001900</li>
            </ul>
            <p>Chủ nhật: 8h30-18h</p>
          </div>
        </div>
        <div className="col-sm-3" style={{ color: '#FFFFFF' }} >
          <div style={{ marginLeft: '30px' }}>
            <h1 style={{ fontSize: '26px' }}>ĐIỀU KHOẢN SỬ DỤNG</h1>
            <div style={{ marginLeft: '20px' }}>
              <p>Điều khoản dịch vụ</p>
              <p>Chính sách bảo mật</p>
              <p>Chính sách mua hàng vận chuyển</p>
              <p>Chính sách đổi trả</p>
            </div>
          </div>
        </div>
        <div className="col-sm-5" style={{ color: '#FFFFFF' }} >
          <div style={{ marginLeft: '30px' }}>
            <h1 style={{ fontSize: '26px' }}>LIÊN HỆ FRUISHOP</h1>
            <div style={{ width: '400px' }}>
              <div
                className="fb-page"
                data-href="https://www.facebook.com/SRMT.BichChi"
                data-width="400"
                data-hide-cover="false"
                data-show-facepile="true"
                data-adapt-container-width="true"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer;