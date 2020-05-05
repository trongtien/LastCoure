import React from 'react'

const ListProduct = () => {
  return (
    <div className="row">
      <div className='col-sm-12 header-title' style={{ padding: '20px 30px 20px 30px', position: 'relative', marginTop: '10px' }} >
        <p style={{ position: 'absolute', marginLeft: '41%', marginTop: '-28px', fontSize: '47px', fontWeight: 'bold', background: '#ffff' }}>Sản Phẩm</p>
        <p style={{ border: '10px solid #86ba09' }}></p>
      </div>
      <div className="col-sm-12" style={{ display: 'flex', padding: '20px 30px 20px 30px' }} >

        <div className="col-sm-3">
          <div className="card" style={{ width: '18rem', position: 'relative' }}>
            <img className="card-img-top" src="http://csfood.vn/wp-content/uploads/2019/03/combo1.png" alt="Card image cap" />
            <p
              className="card-add"
              style={{ position: 'absolute', marginTop: '28px', color: '#333333', border: '2px solid #333333', marginLeft: '230px', fontSize: '27px', borderRadius: '50%', padding: '5px', cursor: 'pointer', display: 'none' }}
            >
              <i className="fas fa-cart-arrow-down">
              </i>
            </p>
            <div className="card-body">
              <h5 className="card-title"
                style={{
                  fontWeight: '600',
                  fontSize: '22px',
                  color: '#666'
                }}
              >
                Trái cây bốn mùa
              </h5>
              <p className="card-text"
                style={{ color: 'red', fontWeight: '500', fontSize: '20px' }}
              >
                300.000
              </p>
              <a href="#" className="btn btn-primary" style={{ marginLeft: '10px' }}>Mua Ngay</a>
              <a href="#" className="btn btn-primary" style={{ marginLeft: '40px' }}>Chi Tiết</a>
            </div>
          </div>
        </div>

        <div className="col-sm-3">
          <div className="card" style={{ width: '18rem', position: 'relative' }}>
            <img className="card-img-top" src="http://csfood.vn/wp-content/uploads/2019/03/combo1.png" alt="Card image cap" />
            <p
              style={{ position: 'absolute', marginTop: '230px', color: '#fff', marginLeft: '45px' }}
            >
              <i className="fas fa-cart-arrow-down">
                <span style={{ marginLeft: '5px' }}>
                  Thêm Vào Giỏ Hàng
                    </span>
              </i>
            </p>
            <div className="card-body">
              <h5 className="card-title" style={{ fontWeight: '600', fontSize: '22px', color: '#666' }}>Trái cây bốn mùa</h5>
              <p className="card-text" style={{ color: 'red', fontWeight: '500', fontSize: '20px' }}>300.000</p>
              <a href="#" className="btn btn-primary" style={{ marginLeft: '10px' }}>Mua Ngay</a>
              <a href="#" className="btn btn-primary" style={{ marginLeft: '40px' }}>Chi Tiết</a>
            </div>
          </div>
        </div>

        <div className="col-sm-3">
          <div className="card" style={{ width: '18rem', position: 'relative' }}>
            <img className="card-img-top" src="http://csfood.vn/wp-content/uploads/2019/03/combo1.png" alt="Card image cap" />
            <p
              style={{ position: 'absolute', marginTop: '230px', color: '#fff', marginLeft: '45px' }}
            >
              <i className="fas fa-cart-arrow-down">
                <span style={{ marginLeft: '5px' }}>
                  Thêm Vào Giỏ Hàng
                    </span>
              </i>
            </p>
            <div className="card-body">
              <h5 className="card-title" style={{ fontWeight: '600', fontSize: '22px', color: '#666' }}>Trái cây bốn mùa</h5>
              <p className="card-text" style={{ color: 'red', fontWeight: '500', fontSize: '20px' }}>300.000</p>
              <a href="#" className="btn btn-primary" style={{ marginLeft: '10px' }}>Mua Ngay</a>
              <a href="#" className="btn btn-primary" style={{ marginLeft: '40px' }}>Chi Tiết</a>
            </div>
          </div>
        </div>

        <div className="col-sm-3">
          <div className="card" style={{ width: '18rem', position: 'relative' }}>
            <img className="card-img-top" src="http://csfood.vn/wp-content/uploads/2019/03/combo1.png" alt="Card image cap" />
            <p
              style={{ position: 'absolute', marginTop: '230px', color: '#fff', marginLeft: '45px' }}
            >
              <i className="fas fa-cart-arrow-down">
                <span style={{ marginLeft: '5px' }}>
                  Thêm Vào Giỏ Hàng
                    </span>
              </i>
            </p>
            <div className="card-body">
              <h5 className="card-title" style={{ fontWeight: '600', fontSize: '22px', color: '#666' }}>Trái cây bốn mùa</h5>
              <p className="card-text" style={{ color: 'red', fontWeight: '500', fontSize: '20px' }}>300.000</p>
              <a href="#" className="btn btn-primary" style={{ marginLeft: '10px' }}>Mua Ngay</a>
              <a href="#" className="btn btn-primary" style={{ marginLeft: '40px' }}>Chi Tiết</a>
            </div>
          </div>
        </div>

      </div>
      <div className='col-sm-12'
        style={{ textAlign: 'center', }}
      >
        <button
          style={{ fontWeight: '500', background: 'none', borderRadius: '5px', fontSize: '20px' }}
        >Xem Thêm</button>
      </div>
    </div>
  )
}

export default ListProduct