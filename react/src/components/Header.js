import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from './Login'
const Header = ({ isActive, isFormLogin }) => {
  const isOpenLogin = (e) => {
    e.preventDefault()
    isFormLogin()
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light "
        style={{ height: "100px", background: '#FFFFFF' }}
      >
        <a className="navbar-brand" href="#"
          style={{ fontWeight: '600', fontSize: '50px', color: '#86ba09', marginLeft: '50px' }}
        >FruiShop</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto"
            style={{ marginLeft: '50px' }}
          >
            <li className="nav-item active">
              <Link className="nav-link" to="/">Trang Chủ</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Introduction">Giới Thiệu</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sản Phẩm
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/product">Tấc cả</Link>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Liên Hệ</a>
            </li>
          </ul>


          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i className="fas fa-search"></i></button>
            <button
              className='btn-icon'
              style={{ fontSize: '20px', background: 'none', border: 'none', marginLeft: '15px' }}
              onClick={isOpenLogin}
            ><i className="fas fa-user-alt"
              style={{ fontSize: '24px' }}
            ></i></button>
            <button
              className='btn-icon'
              style={{ fontSize: '20px', background: 'none', border: 'none', marginLeft: '15px', marginRight: '10px' }}
            ><i className="fas fa-shopping-cart"
              style={{ fontSize: '24px' }}
            ></i></button>
          </form>
        </div>
      </nav>
    </div>
  )
}

const isFormLogin = () => {
  return (dispatch) => {
    dispatch({ type: 'OPEN_FORM' })
  }
}

const mapStateToProps = ({ helperReducer }) => ({ isActive: helperReducer.isActive })
const mapDispatchToProps = { isFormLogin }

export default connect(mapStateToProps, mapDispatchToProps)(Header);