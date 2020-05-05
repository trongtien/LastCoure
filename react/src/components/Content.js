import React from 'react'

const Content = () => {
  return (
    <div className="row">
      <div className='col-sm-12 header-title' style={{ padding: '20px 30px 20px 30px', position: 'relative', marginTop: '10px' }} >
        <p style={{ position: 'absolute', marginLeft: '15%', marginTop: '-25px', fontSize: '43px', fontWeight: 'bold', background: '#ffff' }}>
          4 LÝ DO NÊN MUA HOA QUẢ TẠI FRUISHOP
        </p>
        <p style={{ border: '10px solid #86ba09' }}></p>
      </div>

      <div className="col-sm-12" style={{ display: 'flex', padding: '20px 30px 20px 30px' }} >
        <div className="col-sm-3" >
          <div className="card" style={{ background: '#f9f9f9', border: 'none' }}>
            <div className="card-body">
              <h5 className="card-title" style={{ color: '#30942A', fontWeight: 'bold', fontSize: '18px' }}>NGUỒN GỐC</h5>
              <p className="card-text" style={{ color: '#000000', fontSize: '16px', fontWeight: '400' }}>Cam kết hàng hoa quả sạch có nguồn gốc xuất xứ nhập khẩu 100% ở nước ngoài và trong nước</p>
            </div>
          </div>
        </div>

        <div className="col-sm-3" >
          <div className="card" style={{ background: '#f9f9f9', border: 'none' }}>
            <div className="card-body">
              <h5 className="card-title" style={{ color: '#30942A', fontWeight: 'bold', fontSize: '18px' }}>TƯƠI NGON</h5>
              <p className="card-text" style={{ color: '#000000', fontSize: '16px', fontWeight: '400' }}>Hoa quả sạch luôn tươi ngon và được bảo quản sạch sẽ, không dùng hóa chất bảo quản.</p>
            </div>
          </div>
        </div>

        <div className="col-sm-3" >
          <div className="card" style={{ background: '#f9f9f9', border: 'none' }}>
            <div className="card-body">
              <h5 className="card-title" style={{ color: '#30942A', fontWeight: 'bold', fontSize: '18px' }}>TRỌNG LƯỢNG</h5>
              <p className="card-text" style={{ color: '#000000', fontSize: '16px', fontWeight: '400' }}>Cam kết trọng lượng đúng như Quý khách yêu cầu chính xác đến từng Gram, không gian dối về trọng lượng cũng như số lượng.</p>
            </div>
          </div>
        </div>

        <div className="col-sm-3" >
          <div className="card" style={{ background: '#f9f9f9', border: 'none' }}>
            <div className="card-body">
              <h5 className="card-title" style={{ color: '#30942A', fontWeight: 'bold', fontSize: '18px' }}>VẬN CHUYỂN</h5>
              <p className="card-text" style={{ color: '#000000', fontSize: '16px', fontWeight: '400' }}>Miễn phí vận chuyển nội thành cho các đơn hàng trị giá từ 3 triệu đồng, và từ 20,000đ đến 30,000đ mỗi đơn hàng tùy địa điểm.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Content