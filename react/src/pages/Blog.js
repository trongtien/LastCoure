import React from 'react'

const Blog = () => {
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

      <div className="col-sm-12" style={{ padding: '20px 30px 20px 30px' }} >
        <nav aria-label="Page navigation example" style={{ float: 'right', marginRight: '295px' }}>
          <ul className="pagination">
            <li className="page-item"><a className="page-link" href="#"><i class="fas fa-angle-double-left"></i></a></li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#"><i class="fas fa-angle-double-right"></i></a></li>
          </ul>
        </nav>
      </div>

    </div>
  )
}

export default Blog