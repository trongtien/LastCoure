import React, { useEffect } from 'react'
import { getCallApi } from '../config/apiCaller'
import { connect } from 'react-redux'
const ListProduct = () => {
  useEffect(() => {
  }, [])
  return (
    <div className="row">
      <div className='col-sm-12 header-title' style={{ padding: '20px 30px 20px 30px', position: 'relative', marginTop: '10px' }} >
        <p style={{ position: 'absolute', marginLeft: '41%', marginTop: '-28px', fontSize: '47px', fontWeight: 'bold', background: '#ffff' }}>Sản Phẩm</p>
        <p style={{ border: '10px solid #86ba09' }}></p>
      </div>
      <div className="col-sm-12" style={{ display: 'flex', padding: '20px 30px 20px 30px' }} >

        <div className="col-sm-3">
          <div className="card" style={{ width: '18rem' }}>

            <img className="card-img-top" src="http://csfood.vn/wp-content/uploads/2019/03/combo1.png" alt="Card image cap" style={{ cursor: "pointer" }} />

            <div className="col-sm-12 card-body" style={{ display: 'flex' }}>
              <div className="col-sm-10">
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
              </div>
              <div className="col-sm-2" style={{ position: 'relative' }}>
                <p className="card-add">
                  <i className="fas fa-cart-arrow-down" style={{ position: 'absolute', lineHeight: "27px" }}>
                  </i>
                </p>
              </div>
            </div>
            <div className="col-sm-12">
              <a href="#" className="btn btn-primary btn-success-card" >Mua Ngay</a>
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
    </div >
  )
}

const listProduct = () => {
  return (dispatch) => {

  }
}

mapStateToProps = ({ productReducer }) => {
  product: productReducer.product
}
mapDispatchToProps = {
  listProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(ListProduc)