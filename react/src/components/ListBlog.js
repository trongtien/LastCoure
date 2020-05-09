import React from 'react'

const ListBlog = () => {
  return (
    <div className="row">
      <div className='col-sm-12 header-title' style={{ padding: '20px 30px 20px 30px', position: 'relative', marginTop: '10px' }} >
        <p style={{ position: 'absolute', marginLeft: '41%', marginTop: '-28px', fontSize: '47px', fontWeight: 'bold', background: '#ffff' }}>BLOG</p>
        <p style={{ border: '10px solid #86ba09' }}></p>
      </div>

      <div className="col-sm-12" style={{ display: 'flex', padding: '20px 30px 20px 30px' }} >
        <div className="col-sm-4">
          <div className="card">
            <img className="card-img-top" src="http://csfood.vn/wp-content/uploads/2019/03/combo1.png" alt="Card image cap" style={{ height: '300px' }} />
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Chi tiết</a>
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
export default ListBlog